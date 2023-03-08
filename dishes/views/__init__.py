from ninja import Router

from .dishes_view import dishes_router

dishes_module_router = Router()
dishes_module_router.add_router("", dishes_router)