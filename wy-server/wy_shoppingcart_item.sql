-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-07 13:39:16
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
-- 表的结构 `wy_shoppingcart_item`
--

CREATE TABLE `wy_shoppingcart_item` (
  `iid` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `is_checked` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `wy_shoppingcart_item`
--

INSERT INTO `wy_shoppingcart_item` (`iid`, `uid`, `pid`, `count`, `is_checked`) VALUES
(1, 10, 17, 1, 0),
(2, 11, 11, 1, 0),
(3, 12, 1, 1, 1),
(4, 13, 3, 9, 0),
(5, 14, 1, 1, 0),
(13, 20, 1, 1, 1),
(14, 22, 17, 11, 1),
(15, 20, 28, 1, 0),
(16, 25, 2, 1, 1),
(17, 3, 28, 1, 1),
(18, 3, 14, 1, 1),
(19, 28, 1, 99997, 0),
(20, 29, 31, 1, 1),
(25, 3, 18, 1, 0),
(26, 32, 13, 1, 0),
(27, 32, 5, 1, 0),
(28, 32, 19, 1, 0),
(29, 33, 1, 1, 0),
(31, 3, 1, 1, 0),
(32, 35, 20, 1, 0),
(33, 2, 19, 1, 1),
(34, 39, 19, 1, 1),
(35, 1, 5, 6, 1),
(36, 1, 28, 3, 1),
(37, 1, 9, 2, 1),
(38, 45, 22, 1, 0),
(39, 46, 1, 1, 0),
(40, 48, 28, 1, 1),
(41, 1, 1, 18, 1),
(42, 50, 28, 1, 1),
(43, 52, 28, 1, 1),
(44, 51, 5, 1, 1),
(45, 54, 1, 1, 1),
(46, 56, 28, 1, 1),
(47, 59, 5, 1, 0),
(48, 59, 9, 1, 0),
(49, 59, 19, 1, 0),
(50, 31, 1, 1, 1),
(51, 59, 1, 2, 0),
(52, 60, 28, 1, 1),
(53, 46, 21, 1, 0),
(54, 1, 12, 1, 1),
(55, 61, 5, 1, 1),
(56, 61, 6, 1, 0),
(57, 70, 1, 1, 1),
(58, 71, 1, 1, 1),
(59, 1, 4, 3, 1),
(60, 36, 17, 1, 1),
(61, 35, 17, 7, 0),
(62, 35, 5, 13, 0),
(63, 72, 9, 1, 1),
(64, 82, 1, 1, 1),
(65, 83, 17, 1, 1),
(66, 35, 28, 4, 0),
(67, 65, 40, 2, 0),
(68, 1, 6, 4, 0),
(69, 1, 11, 10, 0),
(70, 1, NULL, 1, 0),
(71, 1, NULL, 1, 0),
(72, 1, 3, 2, 0),
(73, 1, 8, 5, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wy_shoppingcart_item`
--
ALTER TABLE `wy_shoppingcart_item`
  ADD PRIMARY KEY (`iid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `wy_shoppingcart_item`
--
ALTER TABLE `wy_shoppingcart_item`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
