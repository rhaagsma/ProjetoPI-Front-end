import React, { createContext, useState, useContext } from 'react';
import { DataUser, ContextType } from "../components/Type/DataUser";
import {saveUsuario} from './http-commons.ts';
import { postLogin } from './http-commons.ts';

export async function SubmitSignUp(data: DataUser) {
    saveUsuario(data);
}
export async function SubmitLogin(data: DataUser) {
    postLogin(data);
}