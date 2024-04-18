import { Router } from 'express'

import {
  addToCartController,
  deleteCartItemsController,
  getCartItemsController,
  updateCartItemQuantityController
} from '~/controllers/cartItems.controllers'
import {
  addToCartValidator,
  cartItemIdOptionalValidator,
  cartItemIdValidator,
  updateCartItemQuantityValidator
} from '~/middlewares/cartItems.middlewares'
import { paginationValidator } from '~/middlewares/common.middlewares'
import { productIdValidator } from '~/middlewares/products.middlewares'
import { accessTokenValidator, verifiedUserValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handler'

const cartItemsRouter = Router()

cartItemsRouter.post(
  '/add-to-cart/products/:productId',
  accessTokenValidator,
  verifiedUserValidator,
  productIdValidator,
  addToCartValidator,
  wrapRequestHandler(addToCartController)
)

cartItemsRouter.patch(
  '/:cartItemId/quantity',
  accessTokenValidator,
  verifiedUserValidator,
  cartItemIdValidator,
  updateCartItemQuantityValidator,
  wrapRequestHandler(updateCartItemQuantityController)
)

cartItemsRouter.delete(
  '/:cartItemId?',
  accessTokenValidator,
  verifiedUserValidator,
  cartItemIdOptionalValidator,
  wrapRequestHandler(deleteCartItemsController)
)

cartItemsRouter.get(
  '/',
  accessTokenValidator,
  verifiedUserValidator,
  paginationValidator,
  wrapRequestHandler(getCartItemsController)
)

export default cartItemsRouter
