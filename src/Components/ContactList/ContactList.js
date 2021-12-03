import s from "./ContactList.module.css";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { allFilteredContacts } from "../../redux/contacts/selector";
import operations from "../../redux/contacts/operations";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

const ContactList = () => {
  const getContacts = useSelector(allFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const allContacts = getContacts.length !== 0;
  return (
    // <div className={s.listWrapper}>
    allContacts ? (
      <Table striped bordered hover size="sm" className={s.tablePosition}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {getContacts.map(({ name, number, id }) => {
            return (
              <tr key={id}>
                <td>#</td>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <button
                    className={s.button}
                    type="button"
                    onClick={() =>
                      dispatch(
                        operations.deleteContacts(
                          id,
                          toast.success(
                            `Contact ${name} has been deleted successfully!`
                          )
                        )
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    ) : (
      <p className={s.text}>
        There are no contacts yet! Please, add your contacts!
      </p>
    )

    // </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default ContactList;
