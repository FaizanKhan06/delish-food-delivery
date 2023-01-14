-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 07:27 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delish-food-delivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(225) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `img_src` varchar(500) NOT NULL,
  `detail_img_src` varchar(200) NOT NULL DEFAULT 'Assets/Menu/Burger/Smoky BLT Double Quarter Pounder with Cheese.jpeg',
  `Price` float NOT NULL,
  `Type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `Name`, `Description`, `img_src`, `detail_img_src`, `Price`, `Type`) VALUES
(1, 'Double Cheese Margherita', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv dskjsadf asdf sdfc sdfc sdfcsafas sfadsfas fdgasdfasd asdfasdfads asdfasdfasdf asdfasdfasdf', 'Assets/Menu/Pizza/Double_Cheese_Margherita.png', 'Assets/Menu/Pizza/Double_Cheese_Margherita.jpg', 10, 'Pizza'),
(2, 'Farmhouse', 'Pizza2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pizza/Farmhouse.png', 'Assets/Menu/Pizza/Farmhouse.jpg', 30, 'Pizza'),
(3, 'Margherita', 'hello my name is margherita of class 5th sem and want to tell that i am the best pizza available out there.', 'Assets/Menu/Pizza/Margherita.png', 'Assets/Menu/Pizza/Margherita.jpg', 50, 'Pizza'),
(4, 'Mexican Green Wave', 'Pizza4 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pizza/Mexican_Green_Wave.png', 'Assets/Menu/Pizza/Mexican_Green_Wave.jpg', 80, 'Pizza'),
(5, 'Pepper Barbeque & Onion', 'Burger1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pizza/Pepper_Barbeque_&_Onion.png', 'Assets/Menu/Pizza/Pepper_Barbeque_&_Onion.jpg', 85, 'Pizza'),
(6, 'Peppy Paneer', 'Burger2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pizza/Peppy_Paneer.png', 'Assets/Menu/Pizza/Peppy_Paneer.jpg', 69, 'Pizza'),
(7, 'BigMac', 'Burger3 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/BigMac.png', 'Assets/Menu/Burger/BigMac.jpg', 100, 'Burger'),
(8, 'CheeseBurger', 'Pasta1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/CheeseBurger.png', 'Assets/Menu/Burger/CheeseBurger.jpg', 99, 'Burger'),
(9, 'HamBurger', 'Beverages1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/HamBurger.png', 'Assets/Menu/Burger/HamBurger.jpg', 58, 'Burger'),
(10, 'QuarterPounder', 'Beverages2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/QuarterPounder.png', 'Assets/Menu/Burger/QuarterPounder.jpg', 48, 'Burger'),
(11, 'Smoky BLT Double Quarter Pounder with Cheese', 'Dessert1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/Smoky BLT Double Quarter Pounder with Cheese.png', 'Assets/Menu/Burger/Smoky BLT Double Quarter Pounder with Cheese.jpeg', 63, 'Burger'),
(12, 'Smoky BLT Quarter Pounder with Cheese', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Burger/Smoky BLT Quarter Pounder with Cheese.png', 'Assets/Menu/Burger/Smoky BLT Quarter Pounder with Cheese.jpg', 500, 'Burger'),
(13, 'Lasagne', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pasta/Lasagne.png', 'Assets/Menu/Pasta/Lasagne.jpg', 45, 'Pasta'),
(14, 'Pasta Rustica', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pasta/Pasta Rustica.png', 'Assets/Menu/Pasta/Pasta Rustica.jpg', 541, 'Pasta'),
(15, 'Primavera Pasta', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pasta/Primavera Pasta.png', 'Assets/Menu/Pasta/Primavera Pasta.jpg', 0, 'Pasta'),
(16, 'Spaghetti Bolognese', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pasta/Spaghetti Bolognese.png', 'Assets/Menu/Pasta/Spaghetti Bolognese.jpg', 81, 'Pasta'),
(17, 'Spirale Pasta', 'Dessert2 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Pasta/Spirale Pasta.png', 'Assets/Menu/Pasta/Spirale Pasta.jpg', 85, 'Pasta'),
(18, 'Brownie Shake', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Brownie Shake.png', 'Assets/Menu/Beverages/Brownie Shake.jpg', 95, 'Beverages'),
(19, 'Chocolate MilkShake', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Chocolate MilkShake.png', 'Assets/Menu/Beverages/Chocolate MilkShake.jpeg', 65, 'Beverages'),
(20, 'Oreo Shake', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Oreo Shake.png', 'Assets/Menu/Beverages/Oreo Shake.jpg', 1, 'Beverages'),
(21, 'Hot Fudge Shake', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Hot Fudge Shake.png', 'Assets/Menu/Beverages/Hot Fudge Shake.jpg', 550.1, 'Beverages'),
(22, 'Strawberry Milkshake', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Strawberry Milkshake.png', 'Assets/Menu/Beverages/Strawberry Milkshake.jpg', 13, 'Beverages'),
(23, 'Virgin Mojito', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Virgin Mojito.png', 'Assets/Menu/Beverages/Virgin Mojito.jpeg', 63, 'Beverages'),
(24, 'Cocacola', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Cocacola.png', 'Assets/Menu/Beverages/Cocacola.jpeg', 62, 'Beverages'),
(25, 'Fanta', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Fanta.png', 'Assets/Menu/Beverages/Fanta.jpg', 899, 'Beverages'),
(26, 'Sprite', 'Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv  erfdv  rsdv', 'Assets/Menu/Beverages/Sprite.png', 'Assets/Menu/Beverages/Sprite.jpg', 0, 'Beverages');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail_table`
--

CREATE TABLE `order_detail_table` (
  `order_detail_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `order_no` varchar(200) NOT NULL,
  `menu_id` int(225) NOT NULL,
  `no_of_items` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_detail_table`
--

INSERT INTO `order_detail_table` (`order_detail_id`, `username`, `order_no`, `menu_id`, `no_of_items`) VALUES
(48, 'faizanKhan', 'faizanKhan_0', 1, 4),
(49, 'faizanKhan', 'faizanKhan_1', 12, 4),
(50, 'faizanKhan', 'faizanKhan_2', 6, 4),
(51, 'faizanKhan', 'faizanKhan_4', 11, 3),
(52, 'faizanKhan', 'faizanKhan_4', 23, 2);

-- --------------------------------------------------------

--
-- Table structure for table `order_table`
--

CREATE TABLE `order_table` (
  `order_no` varchar(200) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Subtotal` float NOT NULL,
  `Tax` float NOT NULL,
  `Total` float NOT NULL,
  `Payment_Method` varchar(225) NOT NULL,
  `order_date` date NOT NULL,
  `order_time` time NOT NULL,
  `total_items` int(255) NOT NULL,
  `order_status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_table`
--

INSERT INTO `order_table` (`order_no`, `Username`, `Subtotal`, `Tax`, `Total`, `Payment_Method`, `order_date`, `order_time`, `total_items`, `order_status`) VALUES
('faizanKhan_0', 'faizanKhan', 40, 7.2, 47.2, 'Cash On Delivery', '2023-01-12', '18:26:22', 1, 'Ready To Pickup'),
('faizanKhan_1', 'faizanKhan', 2000, 360, 2360, 'Cash On Delivery', '2023-01-12', '19:11:54', 1, 'Order Placed'),
('faizanKhan_2', 'faizanKhan', 276, 49.68, 325.68, 'Cash On Delivery', '2023-01-12', '19:50:22', 1, 'Order Placed'),
('faizanKhan_4', 'faizanKhan', 315, 56.7, 371.7, 'Cash On Delivery', '2023-01-12', '20:44:48', 2, 'Order Placed');

-- --------------------------------------------------------

--
-- Table structure for table `user_detail`
--

CREATE TABLE `user_detail` (
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `PhoneNumber` bigint(15) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Profile_img_path` varchar(500) NOT NULL DEFAULT 'Assets/Images/profile.png',
  `Street` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `State` varchar(50) NOT NULL,
  `HouseNo` varchar(50) NOT NULL,
  `ZipCode` int(10) NOT NULL,
  `Current_order_no` int(200) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_detail`
--

INSERT INTO `user_detail` (`FirstName`, `LastName`, `Username`, `PhoneNumber`, `Password`, `Profile_img_path`, `Street`, `City`, `State`, `HouseNo`, `ZipCode`, `Current_order_no`) VALUES
('Charan', 'Prasad', 'charanPrasad', 6362630712, 'cs205554', 'https://cdn.filestackcontent.com/i41LSn8KRS6ujee4RIQz', 'cs205554', 'Kormangala', 'Banglore', 'Karnataka', 899, 0),
('Faizan45454', 'Khan', 'faizanKhan', 2147483647, 'faizan', 'https://cdn.filestackcontent.com/6NR8FzapT2msvCvbooAw', 'hello', 'hello', 'hello', 'hello', 0, 5),
('Pankaj', 'Barad', 'pankajBarad', 789456123, 'cs205554', 'https://cdn.filestackcontent.com/lhyGuN9Sa2fSLjo0Bi3G', 'cs205554', 'gujrat street', 'gujrat city', 'gujrat', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail_table`
--
ALTER TABLE `order_detail_table`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `username` (`username`),
  ADD KEY `order_no` (`order_no`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Indexes for table `order_table`
--
ALTER TABLE `order_table`
  ADD PRIMARY KEY (`order_no`),
  ADD KEY `Username` (`Username`);

--
-- Indexes for table `user_detail`
--
ALTER TABLE `user_detail`
  ADD PRIMARY KEY (`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `order_detail_table`
--
ALTER TABLE `order_detail_table`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_detail_table`
--
ALTER TABLE `order_detail_table`
  ADD CONSTRAINT `order_detail_table_ibfk_1` FOREIGN KEY (`username`) REFERENCES `user_detail` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_detail_table_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menu_items` (`id`);

--
-- Constraints for table `order_table`
--
ALTER TABLE `order_table`
  ADD CONSTRAINT `order_table_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `user_detail` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
