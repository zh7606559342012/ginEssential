package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"oceanlearn.teach/ginessential/common"
	"oceanlearn.teach/ginessential/controller"
)

func main() {
	db := common.InitDB()
	defer db.Close()
	r := gin.Default()
	r.POST("/api/auth/register", controller.Register)
	r.Run()
}
