#!/usr/bin/env python3
"""
Fix concept-map.yml files after reorganization:
1. Update all question paths to questions/filename.yml
2. Create stub files for missing questions
"""

import os
import yaml
from pathlib import Path

BASE_DIR = Path('/home/stephen/Dev/current/cs-333/public/textbook/content')

# Template for stub question files
STUB_TEMPLATE = """id: 1
question: "TODO: Add question text"
answer: "TODO: Add answer"
vocab_answer: []
answer_kindergarten: "TODO: Add kindergarten-level answer"
vocab_kindergarten: []
answer_3rd_grade: "TODO: Add 3rd grade-level answer"
vocab_3rd_grade: []
answer_7th_grade: "TODO: Add 7th grade-level answer"
vocab_7th_grade: []
answer_high_school: "TODO: Add high school-level answer"
vocab_high_school: []
answer_undergraduate: "TODO: Add undergraduate-level answer"
vocab_undergraduate: []
topics: []
type: "conceptual"
points: 3
difficulty: "medium"
learning_objectives: []
"""

def fix_concept_map(chapter_dir):
    """Fix a single concept-map.yml file"""
    concept_map_path = chapter_dir / 'concept-map.yml'
    questions_dir = chapter_dir / 'questions'
    
    if not concept_map_path.exists():
        print(f"❌ No concept-map.yml in {chapter_dir}")
        return
    
    print(f"\n{'='*60}")
    print(f"Processing: {chapter_dir.name}")
    print(f"{'='*60}")
    
    # Read concept map
    with open(concept_map_path, 'r') as f:
        data = yaml.safe_load(f)
    
    # Ensure questions directory exists
    questions_dir.mkdir(exist_ok=True)
    
    updated = False
    missing_count = 0
    fixed_count = 0
    
    # Process all exam questions
    for category in data.get('concept_map', []):
        for concept in category.get('concepts', []):
            exam_questions = concept.get('exam_questions', [])
            
            for i, question_file in enumerate(exam_questions):
                # Strip any directory prefix
                just_filename = os.path.basename(question_file)
                
                # Expected path
                expected_path = f"questions/{just_filename}"
                full_path = chapter_dir / 'questions' / just_filename
                
                # Check if we need to update the path
                if question_file != expected_path:
                    print(f"  ✏️  Fixing path: {question_file} -> {expected_path}")
                    exam_questions[i] = expected_path
                    updated = True
                    fixed_count += 1
                
                # Check if file exists
                if not full_path.exists():
                    print(f"  📝 Creating stub: {expected_path}")
                    with open(full_path, 'w') as f:
                        f.write(STUB_TEMPLATE)
                    missing_count += 1
    
    # Write back if updated
    if updated:
        with open(concept_map_path, 'w') as f:
            yaml.dump(data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)
        print(f"\n✅ Updated {concept_map_path}")
    else:
        print(f"\n⏭️  No path updates needed")
    
    print(f"📊 Stats: {fixed_count} paths fixed, {missing_count} stubs created")
    
    return fixed_count, missing_count

def main():
    """Process all chapter directories"""
    total_fixed = 0
    total_stubs = 0
    
    print("Starting concept-map.yml repair process...")
    
    # Process each chapter
    for chapter_num in range(1, 7):
        chapter_dir = BASE_DIR / f'chapter-0{chapter_num}'
        if chapter_dir.exists():
            fixed, stubs = fix_concept_map(chapter_dir)
            total_fixed += fixed
            total_stubs += stubs
    
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"Total paths fixed: {total_fixed}")
    print(f"Total stubs created: {total_stubs}")
    print(f"✅ Done!")

if __name__ == '__main__':
    main()
