#设置客户端语言
SET NAMES UTF8;
#放弃数据库如果存在
DROP DATABASE IF EXISTS wx;
#创建数据库
CREATE DATABASE wx CHARSET=UTF8;
#进入数据库
USE wx;
#创建表 
CREATE TABLE details(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url varchar(128) NOT NULL,
    title varchar(128) DEFAULT NULL,
    subtitle varchar(128) DEFAULT NULL,
    price varchar(128) DEFAULT NULL,
    sale varchar(128) NOT NULL,
    img1 varchar(128) NOT NULL,
    img2 varchar(128) NOT NULL,
    img3 varchar(128) NOT NULL,
    img4 varchar(128) NOT NULL,
    img5 varchar(128) NOT NULL,
);
#插入数据
INSERT INTO details VALUES(NULL,'http://localhost:3000/img/fruit/01.jpg',"丹东红颜九九草莓2斤装",'颗颗都有防震网,咬一口满嘴香气',"199.00","717","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg");
INSERT INTO details VALUES(NULL,'http://localhost:3000/img/fruit/02.jpg',"越南进口薄核大芒果",'果肉金黄甜嫩',"38.50","717","http://localhost:3000/img/fruit/02.jpg","http://localhost:3000/img/fruit/02.jpg","http://localhost:3000/img/fruit/02.jpg","http://localhost:3000/img/fruit/02.jpg","http://localhost:3000/img/fruit/02.jpg");
INSERT INTO details VALUES(NULL,'http://localhost:3000/img/fruit/01.jpg',"丹东红颜九九草莓2斤装",'颗颗都有防震网,咬一口满嘴香气',"199.00","717","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg");
INSERT INTO details VALUES(NULL,'http://localhost:3000/img/fruit/01.jpg',"丹东红颜九九草莓2斤装",'颗颗都有防震网,咬一口满嘴香气',"199.00","717","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg");
INSERT INTO details VALUES(NULL,'http://localhost:3000/img/fruit/01.jpg',"丹东红颜九九草莓2斤装",'颗颗都有防震网,咬一口满嘴香气',"199.00","717","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg","http://localhost:3000/img/fruit/01.jpg");