-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 06:36 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `image` varchar(256) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(512) NOT NULL,
  `price` varchar(512) NOT NULL,
  `type` varchar(20) NOT NULL,
  `comments` varchar(512) NOT NULL,
  `avatar` varchar(256) NOT NULL,
  `username` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `image`, `rating`, `title`, `description`, `price`, `type`, `comments`, `avatar`, `username`, `country`, `city`) VALUES
(1, 'image.jpg', 4, 'Private Room- 1Double & 1Single Bed-Central London', 'A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).', '£200', 'single', 'We hated your smelly shitty house', 'image.png', 'Wasiq', 'UK', 'London');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
