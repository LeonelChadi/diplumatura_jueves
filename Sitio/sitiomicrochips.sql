-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-12-2022 a las 14:34:05
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sitiomicrochips`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'China y EEUU avivan la guerra de los chips con España a la caza de inversores', 'España busca la inversión externa para la fabricación de microchips y semiconductores que permitiría abastecer el sector del automóvil el cual representa un 12,3% del mercado mundial de estos componentes.', 'La importancia geopolítica del sector del microchip ha recrudecido una guerra tecnológica entre las dos potencias mundiales: EEUU y China, de la que acabamos de ver otro capítulo. Este mismo viernes la potencia presidida por Joe Biden limitaba la importación y venta de productos de Huawei y ZTE. En este contexto, Europa no ha querido quedarse atrás ya que es consciente del valor estratégico de este sector en la industria del automóvil, que demanda cada vez más microchips. Recientemente, el Gobierno de Pedro Sánchez ha redoblado los esfuerzos en busca de grandes inversores internacionales que fabrican estos componentes en España para la industria automotriz, de la que el país es el octavo productor mundial.\r\n\r\nLas ventas mundiales de semiconductores (el principal componente necesario para construir microchips) se dispararon en los últimos tres años según el informe “State Of The U.S. Semiconductor Industry” realizado por la American Semiconductor Industry (ASI). Tras unas ventas relativamente fuertes de 440.400 millones de dólares en 2020, la facturación aumentó una tasa récord del 26,2% en 2021, alcanzando los 555.900 millones de dólares.\r\n\r\nEl incremento exponencial de la demanda, precedió a los problemas en la cadena de suministro de este producto causados en el ojo del huracán de la pandemia. Sin embargo el Consejo General de Ingenieros Industriales en España explica que hay otros dos importantes factores que han provocado la escasez mundial de microchips: el crecimiento de sectores como las comunicaciones con el despliegue de 5G y el impulso a la movilidad eléctrica en un mundo asestado por una crisis energética catapultada por la guerra en Rusia y el cambio climático.', 'iofa27b1cykavppatihv'),
(2, 'Hallan una forma de imprimir microchips con tan solo los ingredientes de los caramelos: azúcar y jarabe de maíz', 'Los dulces se derriten, dejando transferidos los patrones sobre cualquier superficie y sin dejar residuos', 'Gary Zabow, científico del Instituto Nacional de Estándares y Tecnología (NIST), en EE. UU., nunca tuvo la intención de usar dulces en sus experimentos. Pero ya desesperado, y como último recurso, enterró pequeños imanes en trozos de caramelo duro, ya que el azúcar se disuelve fácilmente en agua, liberando estos imanes sin dejar plásticos o productos químicos dañinos. Mientras preparaba este paquete con destino al laboratorio de unos colegas biomédicos, dejó uno de estas \'chucherías\' en un vaso de precipitados.\r\n\r\nCon el calor y el tiempo, el caramelo se derritió. Para limpiar el vaso, lo enjuagó con agua, pensando que esta acción disolvería el azúcar. Sin embargo, vio que en el fondo del vaso había un extraño color arcoíris que le sorprendieron: los microimanes habían sido transferidos al fondo del recipiente, como una especie de \'calcomanía\'. «Los colores indicaron que las matrices de micropuntos habían conservado su patrón único«, explica Zabow.\r\n\r\nAquello le dio una idea: ¿era posible usar azúcar de mesa normal para llevar el poder de los microchips a superficies nuevas y no convencionales? Los hallazgos de Zabow sobre este posible proceso de impresión por transferencia se acaban de publicar en la revista \'Science\'.', 'p6mq5mutvuac8uwfuegs'),
(10, 'AMD y SiPeals crearán una supercomputadora a exaescala para 2023', 'La compañía estadounidense de semiconductores AMD ha anunciado su colaboración con la startup francesa SiPearl con el objetivo de construir de forma conjunta sistemas de supercomputación de nivel exascale.', 'Estos aceleradores se basan en la tecnología Radeon GPU de AMD. También, se pueden encontrar entre otros sistemas como en Frontier, una supercomputadora de exaescala ubicada en los laboratorios de Oak Ridge y que ya es la supercomputadora más rápida del mundo.\r\n\r\nPese a su corta vida, ya que nació en 2019, SiPearl ya ha rubricado alianzas con otros socios importantes del sector como NVidia, HPE, Graphcore o Intel. Además, también participa en el EPI europeo, es decir el European Processor Initiative.', 'w0qdph9oiofxrdqxioaq');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Leonel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Marcos', '81b073de9370ea873f548e31b8adc081');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
