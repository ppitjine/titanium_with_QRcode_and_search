
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2014 年 12 月 21 日 17:05
-- 服务器版本: 10.0.11-MariaDB
-- PHP 版本: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `u125539847_expre`
--

-- --------------------------------------------------------

--
-- 表的结构 `account`
--

CREATE TABLE IF NOT EXISTS `account` (
  `index` int(10) NOT NULL AUTO_INCREMENT,
  `account` varchar(15) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `passwd` int(10) DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`account`),
  KEY `index` (`index`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `account`
--

INSERT INTO `account` (`index`, `account`, `passwd`, `email`) VALUES
(1, '12345678', 12345678, '12345678@yahoo.com.tw');

-- --------------------------------------------------------

--
-- 表的结构 `express`
--

CREATE TABLE IF NOT EXISTS `express` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `item_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `item_description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `item_from` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `arrive_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `item_to` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `account` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index` (`index`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `express`
--

INSERT INTO `express` (`index`, `id`, `item_name`, `item_description`, `order_time`, `item_from`, `status`, `arrive_time`, `item_to`, `account`) VALUES
(2, '0000000001', 'ipad', 'iPad mini 2 32G ', '2014-12-19 14:12:57', 'Taiwan,Taipei', '已送達', '2014-12-31 12:00:00', 'Taiwan,Taoyuan', ''),
(3, '0000000002', 'apple watch', '藍芽4.1', '2014-12-19 14:14:17', 'US, LA', '運送中', '2015-01-02 22:00:00', 'US, NY', ''),
(4, '0000000003', 'iphone', '有店面的品質保證強調售後服務! 絕對全新公司貨未拆封!下標就是現在! 本拍賣產品以單賣手機為主不需強搭配門號', '2014-12-19 14:16:55', 'China,Beijing', '收到通知', '0000-00-00 00:00:00', 'China,Nanging', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
