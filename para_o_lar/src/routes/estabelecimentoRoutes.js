const express = require("express")
const controller = require("../controllers/estabelecimentoController")

const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)


router.post("/cadastro", controller.createLocal)
router.patch("/:id/likes", controller.like)
router.patch("/:id/deslikes", controller.deslike)

router.patch("/likes/:id", controller.updateLike)

router.delete("/:id/remover", controller.removeEstabelecimento)

router.put("/:id/update", controller.update)
router.put("/:id/updateBolean", controller.updateWithBolean)

module.exports = router