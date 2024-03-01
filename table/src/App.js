import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[datas, setDatas] =useState([]);

  const rawData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  useEffect(() => {
    setDatas(rawData);
  }, []);

  const sortByDate = () => {
    rawData.sort((a, b) => new Date(b.date) - new Date(a.date));
    setDatas(rawData);
  };

  const sortByViews = () => {
    rawData.sort((a, b) => b.views - a.views);
    setDatas(rawData);
  };

  return (
    <div >
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data,index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
