-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-07 12:44:31
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wy`
--

-- --------------------------------------------------------

--
-- 表的结构 `wy_index_product`
--

CREATE TABLE `wy_index_product` (
  `pid` int(11) NOT NULL,
  `img_url` varchar(128) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `subtitle` varchar(128) DEFAULT NULL,
  `price` varchar(128) DEFAULT NULL,
  `imgbg` varchar(128) NOT NULL,
  `imgs1` varchar(128) NOT NULL,
  `imgs2` varchar(128) NOT NULL,
  `imgs3` varchar(128) NOT NULL,
  `imgde` varchar(128) NOT NULL,
  `img1` varchar(128) NOT NULL,
  `img2` varchar(128) NOT NULL,
  `img3` varchar(128) NOT NULL,
  `img4` varchar(128) NOT NULL,
  `img0` varchar(128) NOT NULL,
  `nid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `pro`
--

INSERT INTO `wy_index_product` (`pid`,  `img_url`, `title`, `subtitle`, `price`, `imgbg`, `imgs1`, `imgs2`, `imgs3`, `imgde`, `img1`, `img2`, `img3`, `img4`, `img0`, `nid`) VALUES
(1, 'http://localhost:3000/img/pro1/01.jpg', 'JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话', '佩戴舒适 强劲低音 一键式线控 音乐通话耳机', '128', 'http://localhost:3000/img/de1/01.jpg', 'http://localhost:3000/img/de1/02.jpg', 'http://localhost:3000/img/de1/03.jpg', 'http://localhost:3000/img/de1/04.jpg', 'http://localhost:3000/img/main.png', 'http://localhost:3000/img/low2.jpg', 'http://localhost:3000/img/low3.jpg', 'http://localhost:3000/img/low4.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/low1.jpg', 0),
(2, 'http://localhost:3000/img/pro1/03.jpg', '网易云音乐青春系列No.1音乐心针织帽', '', '55', 'http://localhost:3000/img/de2/01.jpg', 'http://localhost:3000/img/de2/02.jpg', 'http://localhost:3000/img/de2/03.jpg', 'http://localhost:3000/img/de2/04.jpg', 'http://localhost:3000/img/main1.png', 'http://localhost:3000/img/low2.jpg', 'http://localhost:3000/img/low3.jpg', 'http://localhost:3000/img/low4.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/de2/01.jpg', 0),
(3, 'http://localhost:3000/img/pro1/04.jpg', '网易云音乐定制款W800X头戴式蓝牙耳机', '网易云音乐独家专供 蓝牙4.0 工艺考究，细节出众 强劲低频，质感人声 超长播放', '199', 'http://localhost:3000/img/de3/01.jpg', 'http://localhost:3000/img/de3/02.jpg', 'http://localhost:3000/img/de3/03.jpg', 'http://localhost:3000/img/de3/04.jpg', 'http://localhost:3000/img/main2.jpg', 'http://localhost:3000/img/sales/02.jpg', 'http://localhost:3000/img/sales/03.jpg', 'http://localhost:3000/img/sales/04.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/sales/01.jpg', 0),
(4, 'http://localhost:3000/img/pro1/05.jpg', '弯头数据线快充2.4A苹果安卓Type-C 玩游戏充电线', '双弯头数据线 支持快充2.4A 玩游戏不档手', '29', 'http://localhost:3000/img/de4/01.jpg', 'http://localhost:3000/img/de4/02.jpg', 'http://localhost:3000/img/de4/03.jpg', 'http://localhost:3000/img/de4/04.jpg', 'http://localhost:3000/img/main3.jpg', 'http://localhost:3000/img/sales1/01.jpg', 'http://localhost:3000/img/sales1/02.jpg', 'http://localhost:3000/img/sales1/03.jpg', 'http://localhost:3000/img/sales1/04.jpg', 'http://localhost:3000/img/sales1/05.jpg', 0),
(5, 'http://localhost:3000/img/pro1/09.jpg', '哆啦A梦正版蓝色直柄雨伞（大）', '', '79', 'http://localhost:3000/img/de5/01.jpg', 'http://localhost:3000/img/de5/02.jpg', '', '', 'http://localhost:3000/img/main4.jpg', 'http://localhost:3000/img/low2.jpg', 'http://localhost:3000/img/low3.jpg', 'http://localhost:3000/img/low4.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/de5/02.jpg', 0),
(6, 'http://localhost:3000/img/pro1/07.jpg', '网易云音乐联名款漫步者W280X蓝牙耳机', '云音乐限量专供款；全新包装；主流颜色设计；轻量化设计，轻盈舒适；微倾斜入耳式，鲨鱼鳍软胶耳撑', '169', 'http://localhost:3000/img/de6/01.jpg', 'http://localhost:3000/img/de6/02.jpg', 'http://localhost:3000/img/de6/03.jpg', 'http://localhost:3000/img/de6/04.jpg', 'http://localhost:3000/img/main5.jpg', 'http://localhost:3000/img/sales/02.jpg', 'http://localhost:3000/img/sales/03.jpg', 'http://localhost:3000/img/sales/04.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/sales/01.jpg', 0),
(7, 'http://localhost:3000/img/pro1/08.jpg\r\n', '击音【触控级】降噪防水手势识别蓝牙运动耳机', '联想音频独立品牌，告别按键，换代触摸运动耳机，重启人生马拉松', '149', 'http://localhost:3000/img/de7/01.jpg\r\n', 'http://localhost:3000/img/de7/02.jpg', 'http://localhost:3000/img/de7/03.jpg', 'http://localhost:3000/img/de7/04.jpg', 'http://localhost:3000/img/main8.jpg', 'http://localhost:3000/img/low2.jpg', 'http://localhost:3000/img/low3.jpg', 'http://localhost:3000/img/low4.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/de7/01.jpg', 0),
(8, 'http://localhost:3000/img/pro1/10.jpg', '伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话', '【赠耳机收纳盒、3对耳套】真无线 蓝牙5.0 超长待机 信号强大稳定 自动连接 双耳通话', '299', 'http://localhost:3000/img/de8/01.jpg\r\n', 'http://localhost:3000/img/de8/02.jpg', 'http://localhost:3000/img/de8/03.jpg', 'http://localhost:3000/img/de8/04.jpg', 'http://localhost:3000/img/main7.jpg', 'http://localhost:3000/img/sales2/01.jpg\r\n', 'http://localhost:3000/img/low3.jpg', 'http://localhost:3000/img/low4.jpg', 'http://localhost:3000/img/low5.jpg', 'http://localhost:3000/img/sales2/02.jpg', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wy_index_product`
--
ALTER TABLE `wy_index_product`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `wy_index_product`
--
ALTER TABLE `wy_index_product`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
