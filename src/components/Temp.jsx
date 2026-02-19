import React from 'react';
import { TranscriptBrowser, useQuestions } from '@srfoster/textbook-lib';

function Temp() {
  const [selectedStudent, setSelectedStudent] = React.useState('weaver_wesley');
  const { questions } = useQuestions();

  console.log('Questions from context:', questions);

  const students = [
    { value: 'weaver_wesley', label: 'Wesley Weaver' },
    { value: 'greene_mason', label: 'Mason Greene' },
    { value: 'gunn_matthew', label: 'Matthew Gunn' },
    { value: 'hamilton_alexander', label: 'Alexander Hamilton' },
    { value: 'hicks_joshua', label: 'Joshua Hicks' },
    { value: 'richnow_cody', label: 'Cody Richnow' },
    { value: 'sessoms_caleb', label: 'Caleb Sessoms' },
    { value: 'sherafatmand_hassan', label: 'Hassan Sherafatmand' }
  ];

  return (
    <div className="temp-page" style={{ padding: '2rem' }}>
      <h2>Temp Page</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="student-select" style={{ marginRight: '0.5rem' }}>
          Select Student:
        </label>
        <select 
          id="student-select"
          value={selectedStudent} 
          onChange={(e) => setSelectedStudent(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        >
          {students.map(student => (
            <option key={student.value} value={student.value}>
              {student.label}
            </option>
          ))}
        </select>
      </div>
      <TranscriptBrowser 
        transcript_path={`/textbook/transcripts/w26/${selectedStudent}.txt`} 
        questions={questions}
      />
    </div>
  );
}

export default Temp;
