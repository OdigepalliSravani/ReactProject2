function App() {
  const items = [
    { title: 'Cabbage', cate: 'veg', id: 1 },
    { title: 'Chicken', cate: 'non-veg', id: 2 },
    { title: 'Carrot', cate: 'veg', id: 3 },
    { title: 'Fish', cate: 'non-veg', id: 4 },
    { title: 'tomato', cate: 'veg', id: 5 },
    { title: 'mutton', cate: 'non-veg', id: 6 },
    { title: 'beetroot', cate: 'veg', id: 7 },
    { title: 'Fish fry', cate: 'non-veg', id: 8 }
  ];

  // Filter veg and non-veg items
  const vegItems = items.filter(item => item.cate === 'veg');
  const nonVegItems = items.filter(item => item.cate === 'non-veg');

  // Remove veg items
  const remainingItems = items.filter(item => item.cate !== 'veg');
  const remainingItems1 = items.filter(item => item.cate !== 'non-veg');
  return (
    <>
      <h1>Filtered Items</h1>

      <h2>Veg Items:</h2>
      <ol>
        {vegItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>

      <h2>Non-Veg Items:</h2>
      <ol>
        {nonVegItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>

      <h2>Remaining Items After Removing Veg:</h2>
      <ol>
        {remainingItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
      <h2>Remaining Items After Removing Non-Veg:</h2>
      <ol>
        {remainingItems1.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
}

export default App;