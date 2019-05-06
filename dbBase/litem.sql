/*
Navicat MySQL Data Transfer

Source Server         : Demo
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : litem

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-05-06 11:35:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `adminID` int(255) NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `adminName` varchar(20) NOT NULL COMMENT '管理员姓名',
  `adminPassWord` varchar(255) NOT NULL COMMENT '管理员密码',
  `adminSex` int(1) DEFAULT '1' COMMENT '管理员性别（1为男，2为女）',
  `adminAge` int(4) DEFAULT '18' COMMENT '管理员年龄',
  `adminType` int(3) DEFAULT NULL COMMENT '管理员职称，1：超级管理员；2：普通管理员；',
  `adminImg` varchar(255) DEFAULT NULL COMMENT '管理员头像',
  `adminOnline` int(1) DEFAULT '0' COMMENT '管理员登录状态；0',
  PRIMARY KEY (`adminID`)
) ENGINE=InnoDB AUTO_INCREMENT=101004 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('101001', '张三', '123456', '1', '18', null, null, '0');
INSERT INTO `admin` VALUES ('101002', '李四', '123456', '1', '18', null, null, '0');
INSERT INTO `admin` VALUES ('101003', 'test', '123456', '1', '18', null, null, '0');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `articleID` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章ID',
  `articleTitle` varchar(255) NOT NULL COMMENT '文章标题',
  `articleAnthor` varchar(255) NOT NULL COMMENT '文章作者',
  `articleContent` varchar(255) NOT NULL COMMENT '文章内容',
  `time` varchar(255) NOT NULL COMMENT '文章发布时间',
  `articleType` int(2) DEFAULT '0' COMMENT '文章类型;\r\n1:html,\r\n2:css,\r\n3:JavaScript,\r\n4,jQuery,\r\n5:Node,\r\n6:React,\r\n7:Vue,\r\n8:MySQL\r\n9:MongoDB\r\n10:Java\r\n0:其他',
  `articleImg` varchar(255) DEFAULT 'www.baidu.com' COMMENT '文章图片',
  PRIMARY KEY (`articleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `companyID` int(11) NOT NULL AUTO_INCREMENT COMMENT '公司ID',
  `companyName` varchar(255) NOT NULL COMMENT '公司名称',
  `companyAdress` varchar(255) DEFAULT NULL COMMENT '公司地址',
  `companyFinance` int(1) NOT NULL DEFAULT '0' COMMENT '融资情况，\r\n0:未融资\r\n1：天使轮，\r\n2：A轮\r\n3：B轮\r\n4：C轮\r\n5：D轮以上\r\n6：上市公司\r\n7:不需要融资',
  `companyNum` int(1) DEFAULT '0' COMMENT '公司人数：\r\n0:不详\r\n1：15人以下\r\n2：15-50人\r\n3：50-150人\r\n4：150-500人\r\n5：500-2000人\r\n6：2000人以上',
  `companyType` varchar(255) DEFAULT NULL COMMENT '职位类型',
  `companyImg` varchar(255) DEFAULT NULL COMMENT '公司logo',
  `companyUrl` varchar(255) DEFAULT NULL COMMENT '公司官网地址',
  `positionName` varchar(255) DEFAULT NULL COMMENT '职位名称',
  `time` varchar(255) DEFAULT NULL COMMENT '发布时间',
  `fullTime` int(1) DEFAULT '1' COMMENT '工作性质；1：全职；2：兼职',
  `workExper` int(1) DEFAULT '0' COMMENT '工作经验:\r\n0:不限\r\n1:应届毕业生\r\n2:一年以下\r\n3：1-3年\r\n4：3-5年\r\n5：5-10年\r\n6：10年以上',
  `education` int(1) DEFAULT '0' COMMENT '学历；\r\n0：不限\r\n1：大专\r\n2：大专及以上\r\n3：本科\r\n4：本科及以上\r\n5：硕士\r\n6：博士\r\n',
  `wages` varchar(255) DEFAULT '3k' COMMENT '薪水',
  `temptation` varchar(255) DEFAULT NULL COMMENT '职位诱惑',
  `describe` varchar(255) DEFAULT NULL COMMENT '工作描述',
  `certification` int(1) DEFAULT '1' COMMENT '企业认证：1.未认证；2已认证',
  PRIMARY KEY (`companyID`)
) ENGINE=InnoDB AUTO_INCREMENT=901007 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('901001', '博创科技', '北京', '7', '3', '教育', 'http://www.lgstatic.com/image1/M00/00/03/CgYXBlTUV_uAY85GAAAVtFKXIv8322.jpg', 'https://www.lagou.com', 'web前端开发工程师', '10:13 ', '2', '4', '0', '20k-30k', '学习环境好,技术环境好,朝九晚五', '主要职责:(*)1、可以独立承担并负责Web前端功能模块的设计与开发。(*) 2、良好的团队合作与沟通，对项目或产品的需求有一定的分析。(*)3、 具有一定的文档写作技能，可以撰写开发工作中相关的技术文档。(*)4、能够确保项目或产品的开发质量和进度，任务交付无延期。(*)5、能够快速响应问题反馈，并提供解决方案。(*)二、任职资格(*)1、具有2年及以上Web前端开发经验。(*)2、丰富的Javascript面向对象编程经验。(*)3、熟悉一种或多种主流的前端框架LayUI，Vue，EasyUI，', '2');
INSERT INTO `company` VALUES ('901002', '斗米', '广州', '0', '0', '计算机', 'https://www.lgstatic.com/i/image2/M00/42/C3/CgotOVrDVUeANc21AABwNm509IU196.png', 'https://www.lagou.com', 'web前端开发工程师', '10:13 ', '1', '0', '0', '3k', '学习环境好,技术环境好,朝九晚五', '主要职责(*)可以独立承担并负责Web前端功能模块的设计与开发。(*) 良好的团队合作与沟通，对项目或产品的需求有一定的分析。(*) 具有一定的文档写作技能，可以撰写开发工作中相关的技术文档。 能够确保项目或产品的开发质量和进度，任务交付无延期。 能够快速响应问题反馈，并提供解决方案。 二、任职资格 具有2年及以上Web前端开发经验。(*)丰富的Javascript面向对象编程经验。(*)熟悉一种或多种主流的前端框架LayUI，Vue，EasyUI，', '2');
INSERT INTO `company` VALUES ('901003', '云账户', '上海', '1', '1', '医疗', 'https://www.lgstatic.com/image1/M00/1D/BC/CgYXBlUry5KAOtj5AACLPKB4DwY000.png', null, '部门助理', '03.10', '3', '5', '0', '3k-5k', '', '主要职责(*)不需要工作经验,能自己配置自己的线上环境，不会但是愿意进步的', '1');
INSERT INTO `company` VALUES ('901004', '非常准', '合肥', '2', '2', '互联网', 'https://www.lgstatic.com/i/image/M00/80/35/Cgp3O1hPupSAOGKWAAAR5Q52ZHo674.png', null, '微信小程序前端', '15:20', '4', '0', '0', '2k-4k', null, '主要职责(*)1、在公司的指导和要求下，完成公司落地展会和线下活动项目的管理和推进工作。', '1');
INSERT INTO `company` VALUES ('901005', '大白鲸', '成都', '3', '3', '互联网', 'https://www.lgstatic.com/i/image2/M01/72/14/CgotOVta3omAPUu8AAjhBHwGYD8998.png', null, '活动策划', '18:20', '5', '0', '0', '3k-6k', null, '主要职责(*)<p>4、根据展会和线下项目需要不定期与合作方如IP方等，开展沟通，管控分歧，及时推进。4、根据展会和线下项目需要不定期与合作方如IP方等，开展沟通，管控分歧，及时推进。', '1');
INSERT INTO `company` VALUES ('901006', '大白鲸', '成都', '0', '0', null, null, null, '活动策划', null, '1', '0', '0', '3k', null, null, '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userID` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `userName` varchar(255) NOT NULL COMMENT '用户姓名',
  `userPassWord` varchar(255) NOT NULL COMMENT '用户密码',
  `userSex` int(1) DEFAULT '1' COMMENT '用户性别,\r\n1:男，\r\n2：女',
  `userAge` int(3) DEFAULT '18' COMMENT '用户年龄',
  `userImg` varchar(255) DEFAULT 'images/icon/user.png' COMMENT '用户头像',
  `education` int(1) DEFAULT '2' COMMENT '最高学历:\r\n0.大专以下\r\n1.大专\r\n2.本科\r\n3.硕士\r\n4.博士及博士以上\r\n',
  `workExper` int(1) DEFAULT '0' COMMENT '工作经验:\r\n0:应届毕业生\r\n1:一年以下\r\n2：1-3年\r\n3：3-5年\r\n4：5-10年\r\n5：10年以上',
  `city` varchar(255) DEFAULT '北京' COMMENT '所在城市',
  `tel` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `email` varchar(255) DEFAULT NULL COMMENT '用户邮箱',
  `graduationTime` varchar(255) DEFAULT '2019' COMMENT '毕业时间',
  `graduationSchool` varchar(255) DEFAULT NULL COMMENT '毕业学校',
  `major` varchar(255) DEFAULT NULL COMMENT '专业',
  `describe` varchar(255) DEFAULT NULL COMMENT '个人描述',
  `positionDesired` varchar(255) DEFAULT NULL COMMENT '期望职位',
  `jobNature` int(1) DEFAULT '1' COMMENT '工作性质；1：全职；2：兼职',
  `salary` varchar(255) DEFAULT NULL COMMENT '期望薪水',
  `wishCity` varchar(255) DEFAULT NULL COMMENT '期望城市',
  `skill` varchar(255) DEFAULT NULL COMMENT '技能',
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=501003 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('501001', '张三', '123456', '1', '18', 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1556784719&di=eb0cd0de54b36dc55a6f792b078c12ff&src=http://b-ssl.duitang.com/uploads/item/201701/21/20170121123051_WsCyT.thumb.700_0.jpeg', '2', '0', '北京', '18715824147', '1528164913@qq.com', '2019', '四川职业技术学院', '软件技术', '报告！前锋攻城师已阵亡', 'web工程师', '1', '4k-10k', '成都', 'Html/CSS3,JavaScript,jQurey,JavaScript面向对象，NodeJs，React，Vue，webpack');
INSERT INTO `user` VALUES ('501002', '李四', '123456', '1', '18', 'http://www.lgstatic.com/image1/M00/00/03/CgYXBlTUV_uAY85GAAAVtFKXIv8322.jpg', '2', '0', '北京', null, null, '2019', null, null, null, null, '1', null, null, null);
