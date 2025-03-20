// export function COMPONENT({ PROP, PROP1 }) {
//   return (
//     <p>
//       {PROP} {PROP1}
//     </p>
//   );
// }

export default function Footer({ handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1> APOD PROJECT</h1>
        <h2> {data?.title} </h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
