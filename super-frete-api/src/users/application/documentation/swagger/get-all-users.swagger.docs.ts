import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

export const GetAllUsersSwaggerDocs = (): MethodDecorator => {
  return applyDecorators(
    ApiTags('users'),
    ApiOperation({
      summary: 'Get all',
      description: 'Get list of documents from database',
    }),
    ApiResponse({ status: HttpStatus.OK }),
  );
};
