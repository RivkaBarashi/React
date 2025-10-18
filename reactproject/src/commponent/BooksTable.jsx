const sampleBooks = [
  { id: 1, title: "מבוקש",author: "יונה ספיר", year: 2014, genre: "מתח", pages: 328 },
  { id: 2, title: " שתול", author: " יונה ספיר", year: 1960, genre: "מתח", pages: 281 },
  { id: 3, title: "שמים וארץ", author: "ליבי קליין", year: 1813, genre: "רגש", pages: 279 },
  { id: 4, title: "המתכונים שלי", author: "אביגיל מיזליק", year: 1937, genre: "מתכונים", pages: 310 },
  { id: 5, title: " איסתרק", author: "מיה קנין ", year: 2011, genre: "מתח", pages: 499 },
];

const BooksTable = ({ books = sampleBooks }) => {
  return (
    <div style={{ padding: 12 }}>
      <h2>טבלת ספרים</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>שם הספר</th>
            <th style={thStyle}>מחבר</th>
            <th style={thStyle}>שנה</th>
            <th style={thStyle}>זאנר</th>
            <th style={thStyle}>עמודים</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td style={tdStyle}>{b.id}</td>
              <td style={tdStyle}>{b.title}</td>
              <td style={tdStyle}>{b.author}</td>
              <td style={tdStyle}>{b.year}</td>
              <td style={tdStyle}>{b.genre}</td>
              <td style={tdStyle}>{b.pages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  background: '#f2f2f2',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default BooksTable;
