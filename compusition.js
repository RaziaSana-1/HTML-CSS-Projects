function words( word ){
    return String( word )
      .toLowerCase()
      .split(/\s/)
  }
  
  function shortUpper( words ){
    return words.map( word => {
      if( word.length < 5 ){
        return word.toUpperCase()
      } else {
        return word
      }
    })
  }
  
  function createText( array ){
    return array.join(' ')
  }
  const text = 'Hello! My name is Adela.'
  //}
  function upperLessThan5( word ){
    return createText( shortUpper( words( word ) ) )
  }
  
  const newText = upperLessThan5( word )
  
  console.log(newText)