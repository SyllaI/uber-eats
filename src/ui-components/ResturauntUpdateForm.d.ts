/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Resturaunt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResturauntUpdateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type ResturauntUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResturauntUpdateFormOverridesProps = {
    ResturauntUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResturauntUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResturauntUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resturaunt?: Resturaunt;
    onSubmit?: (fields: ResturauntUpdateFormInputValues) => ResturauntUpdateFormInputValues;
    onSuccess?: (fields: ResturauntUpdateFormInputValues) => void;
    onError?: (fields: ResturauntUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResturauntUpdateFormInputValues) => ResturauntUpdateFormInputValues;
    onValidate?: ResturauntUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResturauntUpdateForm(props: ResturauntUpdateFormProps): React.ReactElement;
