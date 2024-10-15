function normalizeString(input) {
  
    let normalized = input.trim();
    normalized = normalized.replace(/[^a-zA-Z0-9\s]/g, "");
    normalized = normalized.replace(/\s+/g, " ");
    normalized = normalized.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
  
    return normalized;
  }
  
  let input = " Hello! World@ This is a Test!. ";
  let output = normalizeString(input);
  console.log(output); 
  