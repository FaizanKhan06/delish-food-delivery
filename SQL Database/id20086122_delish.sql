-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2023 at 06:26 PM
-- Server version: 10.5.16-MariaDB
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id20086122_delish`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `username` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `order_no` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `menu_id` int(225) NOT NULL,
  `no_of_items` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_detail_table`
--

INSERT INTO `order_detail_table` (`order_detail_id`, `username`, `order_no`, `menu_id`, `no_of_items`) VALUES
(5, 'faizanKhan', 'faizanKhan_0', 18, 3),
(19, 'faizanKhan', 'faizanKhan_1', 1, 1),
(21, 'charanPrasad', 'charanPrasad_0', 13, 1),
(22, 'charanPrasad', 'charanPrasad_0', 2, 1),
(23, 'charanPrasad', 'charanPrasad_0', 7, 1),
(24, 'charanPrasad', 'charanPrasad_0', 19, 1),
(26, 'charanPrasad', 'charanPrasad_1', 3, 3),
(27, 'pankajBarad', 'pankajBarad_0', 1, 3),
(29, 'pankajBarad', 'pankajBarad_1', 1, 2),
(30, 'pankajBarad', 'pankajBarad_1', 3, 2),
(31, 'pankajBarad', 'pankajBarad_2', 21, 1),
(35, 'pankajBarad', 'pankajBarad_3', 6, 2),
(40, 'pankajBarad', 'pankajBarad_4', 4, 1),
(44, 'pankajBarad', 'pankajBarad_5', 24, 6),
(45, 'pankajBarad', 'pankajBarad_5', 1, 2),
(46, 'pankajBarad', 'pankajBarad_5', 20, 8);

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
  `total_items` int(225) NOT NULL,
  `order_status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_table`
--

INSERT INTO `order_table` (`order_no`, `Username`, `Subtotal`, `Tax`, `Total`, `Payment_Method`, `order_date`, `order_time`, `total_items`, `order_status`) VALUES
('charanPrasad_0', 'charanPrasad', 240, 43.2, 283.2, 'Cash On Delivery', '2023-01-13', '08:36:41', 4, 'Delivered'),
('charanPrasad_1', 'charanPrasad', 150, 27, 177, 'Cash On Delivery', '2023-01-13', '09:09:59', 1, 'Delivered'),
('faizanKhan_0', 'faizanKhan', 285, 51.3, 336.3, 'Cash On Delivery', '2023-01-12', '22:31:47', 1, 'Delivered'),
('faizanKhan_1', 'faizanKhan', 10, 1.8, 11.8, 'Cash On Delivery', '2023-01-12', '23:02:03', 1, 'Delivered'),
('pankajBarad_0', 'pankajBarad', 30, 5.4, 35.4, 'Credit/Debit Card', '2023-01-13', '12:03:22', 1, 'Order Placed'),
('pankajBarad_1', 'pankajBarad', 120, 21.6, 141.6, 'UPI', '2023-01-13', '12:02:52', 2, 'Delivered'),
('pankajBarad_2', 'pankajBarad', 550.1, 99.02, 649.12, 'Cash On Delivery', '2023-01-13', '20:57:32', 1, 'Order Placed'),
('pankajBarad_3', 'pankajBarad', 138, 24.84, 162.84, 'Cash On Delivery', '2023-01-13', '21:13:38', 1, 'Order Placed'),
('pankajBarad_4', 'pankajBarad', 80, 14.4, 94.4, 'Cash On Delivery', '2023-01-13', '21:39:43', 1, 'Order Placed');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_detail`
--

INSERT INTO `user_detail` (`FirstName`, `LastName`, `Username`, `PhoneNumber`, `Password`, `Profile_img_path`, `Street`, `City`, `State`, `HouseNo`, `ZipCode`, `Current_order_no`) VALUES
('Catherine ', 'Chandni ', 'Chandni ', 9854783427, 'chandni123', 'Assets/Images/profile.png', 'Crescent cedar apartment ', 'Bangalore ', 'Karnataka ', '37', 560084, 0),
('Charan', 'Prasad', 'charanPrasad', 7619231303, 'charan', 'https://cdn.filestackcontent.com/i41LSn8KRS6ujee4RIQz', 'Kormangla', 'Banglore', 'Karnataka', '855', 560089, 2),
('Harsha ', 'G b ', 'Dhhd', 0, '123', 'Assets/Images/profile.png', 'Dhhdj', 'Dvd', 'Du', 'Db', 0, 0),
('Faizan', 'Khan', 'faizanKhan', 6362630712, 'faizan', 'https://cdn.filestackcontent.com/6IH8pcTlSCqkPK58WWkq', 'RT Nagar', 'Bangalore ', 'Karnataka ', '17', 560032, 2),
('Harsh', 'Gb', 'harshaGb', 8310062178, 'harsha', 'https://cdn.filestackcontent.com/3WfWVs7lQkaAfORTi6tt', 'Gdhdb', 'Hehdh', 'Hchdh', 'Rhdhfh', 666484, 0),
('Pankaj', 'Barad', 'pankajBarad', 8238035111, 'pankaj', 'https://cdn.filestackcontent.com/lhyGuN9Sa2fSLjo0Bi3G', 'gujrat Street', 'gujrat city', 'gujrat state', 'gujrat no', 560045, 5),
('Sameer', 'Abdul', 'sameerAbdul', 6360894265, 'sameer', 'https://cdn.filestackcontent.com/H1kt0HdQyicCf1RoPefe', 'Cnfh', 'Jfjfj', 'Jfjfj', 'Jfjffj', 560032, 0);

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
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

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
