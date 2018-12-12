-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-05 09:35:42
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wx`
--

-- --------------------------------------------------------

--
-- 表的结构 `details`
--

CREATE TABLE `details` (
  `id` int(11) NOT NULL,
  `img_url` varchar(128) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `subtitle` varchar(128) DEFAULT NULL,
  `price` varchar(128) DEFAULT NULL,
  `sale` varchar(128) NOT NULL,
  `img1` varchar(128) NOT NULL,
  `img2` varchar(128) NOT NULL,
  `img3` varchar(128) NOT NULL,
  `img4` varchar(128) NOT NULL,
  `img5` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `details`
--

INSERT INTO `details` (`id`, `img_url`, `title`, `subtitle`, `price`, `sale`, `img1`, `img2`, `img3`, `img4`, `img5`) VALUES
(1, 'http://localhost:3000/img/fruit/01.jpg', '丹东红颜九九草莓2斤装', '颗颗都有防震网,咬一口满嘴香气', '199.00', '717', 'http://localhost:3000/img/caomei/01.jpg', 'http://localhost:3000/img/caomei/02.jpg', 'http://localhost:3000/img/caomei/03.jpg', 'http://localhost:3000/img/caomei/04.jpg', 'http://localhost:3000/img/caomei/05.jpg'),
(2, 'http://localhost:3000/img/fruit/02.jpg', '越南进口薄核大芒果', '果肉金黄甜嫩', '38.50', '717', 'http://localhost:3000/img/fruit/02.jpg', 'http://localhost:3000/img/fruit/02.jpg', 'http://localhost:3000/img/fruit/02.jpg', 'http://localhost:3000/img/fruit/02.jpg', 'http://localhost:3000/img/fruit/02.jpg'),
(3, 'http://localhost:3000/img/fruit/03.jpg', '圣女果1200g', '肉脆爆浆,一口一脆甜', '199.00', '717', 'http://localhost:3000/img/fruit/03.jpg', 'http://localhost:3000/img/fruit/03.jpg', 'http://localhost:3000/img/fruit/03.jpg', 'http://localhost:3000/img/fruit/03.jpg', 'http://localhost:3000/img/fruit/03.jpg'),
(4, 'http://localhost:3000/img/fruit/04.jpg', '赣南大橙', '酸甜开胃很多汁', '199.00', '717', 'http://localhost:3000/img/fruit/04.jpg', 'http://localhost:3000/img/fruit/04.jpg', 'http://localhost:3000/img/fruit/04.jpg', 'http://localhost:3000/img/fruit/04.jpg', 'http://localhost:3000/img/fruit/04.jpg'),
(5, 'http://localhost:3000/img/fruit/05.jpg', '丹东红颜九九草莓2斤装', '颗颗都有防震网,咬一口满嘴香气', '199.00', '717', 'http://localhost:3000/img/fruit/05.jpg', 'http://localhost:3000/img/fruit/05.jpg', 'http://localhost:3000/img/fruit/05.jpg', 'http://localhost:3000/img/fruit/05.jpg', 'http://localhost:3000/img/fruit/05.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `details`
--
ALTER TABLE `details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
