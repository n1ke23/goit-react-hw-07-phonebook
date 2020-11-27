import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, ADD_CONTACT_Success, ADD_CONTACT_Error, REMOVE_CONTACT, FILTER_VALUE, FILTER_ARR, REMOVE_FILTER_ARR, NOTIFY, ADD_LOCAL_SOR } from './../const/const'


export const addContactRequest = createAction('contacts/addSuccess');// добавить
export const addContatSuccess = createAction(ADD_CONTACT)
export const addContatError = createAction('contacts/addError')
export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction(ADD_LOCAL_SOR);
export const fetchContactsError = createAction('contacts/fetchError');

export const deleteContactRequest = createAction('contacts/deleteRequest');// удалить
export const deleteContactSuccess = createAction(REMOVE_CONTACT);
export const deleteContactError = createAction('contacts/deleteError');

export const setIsNotify = createAction(NOTIFY);// алерт на задвоение
export const filterValue = createAction(FILTER_VALUE);// по чему ищем
export const filterArr = createAction(FILTER_ARR);// массив фильтров

export const removeFilterArr = createAction(REMOVE_FILTER_ARR);



