const supportedLanguages = {
    'af': 'Afrikaans',
    'in': 'india',
    'de': 'German',
    'en': 'English',
    'fr': 'French'
  }
  
  supportedLanguages['cn'] = 'cannada';
  
  
  supportedLanguages["af"] = 'something else';
  
  
  delete supportedLanguages.bn; 
  
  
  console.log(supportedLanguages);