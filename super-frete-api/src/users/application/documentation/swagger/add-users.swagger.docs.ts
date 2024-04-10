import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';

export const AddUsersSwaggerDocs = (): MethodDecorator => {
  return applyDecorators(
    ApiTags('users'),
    ApiOperation({
      summary: 'Create',
      description: 'Create document on database',
    }),
    ApiResponse({ status: HttpStatus.CREATED }),
    ApiBearerAuth(),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'João',
          },
        },
      },
    }),
  );
};
