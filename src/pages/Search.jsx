// import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Card } from '../components/Card';
// import { useFetch } from '../hooks/UseFetch';

// export const Search = ({ apipath }) => {
//   const [searchParams] = useSearchParams();
//   const queryTerm = searchParams.get('q');
//   const { data: Movies } = useFetch(apipath, queryTerm); // Use the useFetch hook

//   useEffect(() => {
//     document.title = `search result for ${queryTerm}`;
//   })

//   return (
//     <main className='container'>
//       <h5 className='text-danger py-2 border-bottom'>{Movies.length==0?`No Result Found For ${queryTerm}`:`Result For ${queryTerm}`}</h5>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
//         {Movies.map((movie) => (
//           <Card key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </main>
//   )
// }


import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/UseFetch'

export const Search = ({ apipath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: Movies } = useFetch(apipath, queryTerm);

  useEffect(() => {
    document.title = `Search results for "${queryTerm}"`;
  }, [queryTerm]); // Dependency added

  return (
    <main className='container'>
      <h5 className='text-danger py-2 border-bottom'>
        {Movies.length === 0 ? `No results found for "${queryTerm}"` : `Results for "${queryTerm}"`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {Movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

