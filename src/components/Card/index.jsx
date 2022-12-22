import './style.css';
export default function Card({ title, imgSrc, body, actions, children }) {
  return (
    <div style={{ display: 'inline-block', width: '33%', backgroundColor: 'red' }}>
      <h3>{title}</h3>
      <img src={imgSrc} alt={title} style={{ width: 200 }} />
      {children}
      <p>{body}</p>
      {/* {actions && <div className='actions-section'>{actions}</div>} */}
      {actions ? <div className='actions-section'>{actions}</div> : ''}
    </div>
  );
}

// export default function Card({ title, imgSrc, body, actions }) {
//   if (actions) {
//     return (
//       <div style={{ display: 'inline-block', width: '33%' }}>
//         <h3>{title}</h3>
//         <img src={imgSrc} alt={title} style={{ width: 200 }} />
//         <p>{body}</p>
//         <div className='actions-section'>{actions}</div>
//       </div>
//     );
//   }
//   return (
//     <div style={{ display: 'inline-block', width: '33%' }}>
//       <h3>{title}</h3>
//       <img src={imgSrc} alt={title} style={{ width: 200 }} />
//       <p>{body}</p>
//     </div>
//   );
// }
