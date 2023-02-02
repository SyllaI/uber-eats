/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResturauntCreateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type ResturauntCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResturauntCreateFormOverridesProps = {
    ResturauntCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResturauntCreateFormProps = React.PropsWithChildren<{
    overrides?: ResturauntCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResturauntCreateFormInputValues) => ResturauntCreateFormInputValues;
    onSuccess?: (fields: ResturauntCreateFormInputValues) => void;
    onError?: (fields: ResturauntCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResturauntCreateFormInputValues) => ResturauntCreateFormInputValues;
    onValidate?: ResturauntCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResturauntCreateForm(props: ResturauntCreateFormProps): React.ReactElement;
