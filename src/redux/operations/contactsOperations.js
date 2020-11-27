import axios from "axios";
import {
    addContactRequest,
    addContatSuccess,
    addContatError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "../actions/actionsContacts";

axios.defaults.baseURL = "http://localhost:2000";

export const addContact = (obj) => (dispatch) => {
    dispatch(addContactRequest());

    axios
        .post("contacts", obj)
        .then(({ data }) => dispatch(addContatSuccess(data)))
        .catch((error) => dispatch(addContatError(error)));
};

export const fetchContacts = () => (dispatch) => {
    dispatch(fetchContactsRequest());

    axios
        .get("contacts")
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch((error) => dispatch(fetchContactsError(error)));
};

export const deleteContact = (id) => (dispatch) => {
    dispatch(deleteContactRequest());

    axios
        .delete(`contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch((error) => dispatch(deleteContactError(error)));
};

