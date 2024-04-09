import * as joi from 'joi';

export const joiSchemaValidatorUtil = <Input = any, Output = any>(
  schema: joi.Schema<Output>,
  data: Input,
): { error: joi.ValidationError; value: Output } => {
  const { error, value } = schema.validate(data, { convert: true });

  return { error, value };
};
