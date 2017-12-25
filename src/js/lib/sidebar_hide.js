function hideSidebarContent(event) {
  var block = $(event.currentTarget).next();
  if ($(block).is(':hidden')) {
  
    $(block).show('slow');
  
  } else {
  
    $(block).hide('slow');
  
  }
  return false;
}

module.exports = hideSidebarContent;
