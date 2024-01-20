/*
 Navicat Premium Data Transfer

 Source Server         : weblab
 Source Server Type    : MySQL
 Source Server Version : 80035
 Source Host           : localhost:3306
 Source Schema         : mysqlforllm

 Target Server Type    : MySQL
 Target Server Version : 80035
 File Encoding         : 65001

 Date: 20/01/2024 04:06:03
*/

drop database if exists mysqlforllm;
CREATE DATABASE mysqlforllm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use mysqlforllm;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dblogforllm
-- ----------------------------
DROP TABLE IF EXISTS `dblogforllm`;
CREATE TABLE `dblogforllm`  (
                                `Hno` int NOT NULL,
                                `Hsts` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                                `Hsend` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                                `Hrcv` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
