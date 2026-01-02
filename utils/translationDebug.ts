// utils/translationDebug.ts
export function debugTranslations(componentName: string, locale: string, namespace: string, translations: any) {
  console.log(`🔍 [${componentName}] Locale: ${locale}, Namespace: ${namespace}`);
  
  if (!translations) {
    console.error(`❌ No translations received for ${namespace}`);
    return false;
  }
  
  console.log(`✅ Translations loaded:`, Object.keys(translations));
  return true;
}

export function logMissingKeys(componentName: string, requiredKeys: string[], translations: any) {
  const missingKeys = requiredKeys.filter(key => !translations[key]);
  
  if (missingKeys.length > 0) {
    console.warn(`⚠️  [${componentName}] Missing keys:`, missingKeys);
    return false;
  }
  
  console.log(`✓ [${componentName}] All required keys present`);
  return true;
}

export function getTranslationSafe(t: (namespace: string) => any, namespace: string, fallback: any = {}) {
  try {
    const translation = t(namespace);
    return translation && typeof translation === 'object' && Object.keys(translation).length > 0 
      ? translation 
      : fallback;
  } catch (error) {
    console.error(`Error getting translation for ${namespace}:`, error);
    return fallback;
  }
}
