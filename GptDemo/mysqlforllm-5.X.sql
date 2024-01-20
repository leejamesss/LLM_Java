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
create database mysqlforllm;

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
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dblogforllm
-- ----------------------------
INSERT INTO `dblogforllm` VALUES (1, 'Succeeded', '我和小明去了北京大学', '北京大学-中性-去了');
INSERT INTO `dblogforllm` VALUES (2, 'Chat', '你好', '你好! 有什么我能帮助您的吗？');
INSERT INTO `dblogforllm` VALUES (2, 'Chat', '我想睡觉', '那你可以去休息一下，好好放松一下。晚安！');
INSERT INTO `dblogforllm` VALUES (3, 'Chat', '你好\n', '你好！有什么可以帮助你的吗？');
INSERT INTO `dblogforllm` VALUES (3, 'Chat', '我想睡觉了今天\n', '好的，希望你有个美好的睡眠！晚安！');
INSERT INTO `dblogforllm` VALUES (4, 'ASTE', '我现在想去睡不着\n', '');
INSERT INTO `dblogforllm` VALUES (5, 'ASTE', '我想区睡觉\n', '睡觉-中性-想');
INSERT INTO `dblogforllm` VALUES (6, 'Translated', 'good night\n', '晚安');
INSERT INTO `dblogforllm` VALUES (7, 'Chat', 'goood\n', 'I\'m glad to hear that! Is there anything specific you would like to talk about or do?');
INSERT INTO `dblogforllm` VALUES (7, 'Chat', 'helloc\n', 'Hello! How can I assist you today?');

SET FOREIGN_KEY_CHECKS = 1;
