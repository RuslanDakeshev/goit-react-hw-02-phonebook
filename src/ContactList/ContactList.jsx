export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <>
        {contacts.map(({ id, name, number }) => {
          return (
            <ul key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </ul>
          );
        })}
      </>
    </>
  );
};