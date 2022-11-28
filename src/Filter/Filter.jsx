export const Filter = ({ value, onFilter }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={onFilter} />
    </>)
}


//     <>
//       <label>Find contacts by name</label>
//       <input type="text" value={this.state.filter} onChange={onFilter} />
//     </>
//   );
// };

// export const Filter = ({ value, onFilter }) => {
//   return (
//     <>
//       <label htmlFor="filter">Find contacts by name</label>
//       <input name="filter" type="text" id="filter" value={value} onChange={onFilter} />
//     </>
//   );
// };