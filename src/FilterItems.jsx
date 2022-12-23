export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.symbol.split(' ').some(word =>
        word.toLowerCase().startsWith(query)
      )
    );
  }