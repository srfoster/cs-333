// CS-333 specific path utilities (overrides library defaults)

// Utility to get the correct base URL for assets
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development (localhost), use the path as-is
  if (import.meta.env.DEV || window.location.hostname === 'localhost') {
    return `/${cleanPath}`;
  }
  
  // In production, prepend the CS-333 base path
  const basePath = import.meta.env.PROD ? '/cs-333-textbook' : '';
  return `${basePath}/${cleanPath}`;
};

// Utility to get the base path for routing
export const getBasePath = () => {
  // In development (localhost), never use a base path
  if (import.meta.env.DEV || window.location.hostname === 'localhost') {
    return '';
  }
  // Only use base path in production for CS-333
  return import.meta.env.PROD ? '/cs-333-textbook' : '';
};
