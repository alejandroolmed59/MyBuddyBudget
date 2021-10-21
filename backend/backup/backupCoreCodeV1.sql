--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2021-10-21 13:02:15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 208 (class 1259 OID 16592)
-- Name: cuenta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuenta (
    cuenta integer NOT NULL,
    descripcion text NOT NULL,
    cuenta_tipo integer NOT NULL,
    moneda integer NOT NULL,
    usuario text NOT NULL,
    add_fecha date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    saldo numeric
);


ALTER TABLE public.cuenta OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16590)
-- Name: cuenta_cuenta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuenta_cuenta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuenta_cuenta_seq OWNER TO postgres;

--
-- TOC entry 2889 (class 0 OID 0)
-- Dependencies: 207
-- Name: cuenta_cuenta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuenta_cuenta_seq OWNED BY public.cuenta.cuenta;


--
-- TOC entry 204 (class 1259 OID 16564)
-- Name: cuenta_tipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuenta_tipo (
    cuenta_tipo integer NOT NULL,
    descripcion text NOT NULL,
    add_fecha date DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.cuenta_tipo OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16562)
-- Name: cuenta_tipo_cuenta_tipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuenta_tipo_cuenta_tipo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuenta_tipo_cuenta_tipo_seq OWNER TO postgres;

--
-- TOC entry 2890 (class 0 OID 0)
-- Dependencies: 203
-- Name: cuenta_tipo_cuenta_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuenta_tipo_cuenta_tipo_seq OWNED BY public.cuenta_tipo.cuenta_tipo;


--
-- TOC entry 211 (class 1259 OID 24615)
-- Name: expense_expense_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.expense_expense_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1;


ALTER TABLE public.expense_expense_seq OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16626)
-- Name: expense; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expense (
    expense integer DEFAULT nextval('public.expense_expense_seq'::regclass) NOT NULL,
    descripcion text NOT NULL,
    precio numeric NOT NULL,
    usuario text NOT NULL,
    expense_categoria integer NOT NULL
);


ALTER TABLE public.expense OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16618)
-- Name: expense_categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expense_categoria (
    expense_categoria integer NOT NULL,
    descripcion text NOT NULL,
    img text
);


ALTER TABLE public.expense_categoria OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16578)
-- Name: moneda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moneda (
    moneda integer NOT NULL,
    descripcion text NOT NULL,
    add_fecha date DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.moneda OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16576)
-- Name: moneda_moneda_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moneda_moneda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moneda_moneda_seq OWNER TO postgres;

--
-- TOC entry 2891 (class 0 OID 0)
-- Dependencies: 205
-- Name: moneda_moneda_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moneda_moneda_seq OWNED BY public.moneda.moneda;


--
-- TOC entry 202 (class 1259 OID 16553)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    usuario text NOT NULL,
    correo text NOT NULL,
    add_fecha date DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 2724 (class 2604 OID 16595)
-- Name: cuenta cuenta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta ALTER COLUMN cuenta SET DEFAULT nextval('public.cuenta_cuenta_seq'::regclass);


--
-- TOC entry 2720 (class 2604 OID 16567)
-- Name: cuenta_tipo cuenta_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta_tipo ALTER COLUMN cuenta_tipo SET DEFAULT nextval('public.cuenta_tipo_cuenta_tipo_seq'::regclass);


--
-- TOC entry 2722 (class 2604 OID 16581)
-- Name: moneda moneda; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moneda ALTER COLUMN moneda SET DEFAULT nextval('public.moneda_moneda_seq'::regclass);


--
-- TOC entry 2880 (class 0 OID 16592)
-- Dependencies: 208
-- Data for Name: cuenta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuenta (cuenta, descripcion, cuenta_tipo, moneda, usuario, add_fecha, saldo) FROM stdin;
5	Secundaria	1	1	olme59	2021-10-12	57.32
7	Bitcoins	6	2	olme59	2021-10-12	30
6	Ahorros	3	1	olme59	2021-10-12	3460
1	Main wallet	1	1	olme59	2021-10-10	200.32
\.


--
-- TOC entry 2876 (class 0 OID 16564)
-- Dependencies: 204
-- Data for Name: cuenta_tipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuenta_tipo (cuenta_tipo, descripcion, add_fecha) FROM stdin;
1	Efectivo	2021-10-11
2	Corriente	2021-10-11
3	Ahorro	2021-10-11
6	Bitcoin	2021-10-12
\.


--
-- TOC entry 2882 (class 0 OID 16626)
-- Dependencies: 210
-- Data for Name: expense; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expense (expense, descripcion, precio, usuario, expense_categoria) FROM stdin;
1	salidita no tan chill	40	olme59	7
2	Tacos al pastor	12	olme59	1
3	Movie theather	15	olme59	7
4	Estreno navideño 🎅	124	olme59	2
5	Compras siman	100	olme59	7
\.


--
-- TOC entry 2881 (class 0 OID 16618)
-- Dependencies: 209
-- Data for Name: expense_categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expense_categoria (expense_categoria, descripcion, img) FROM stdin;
1	Restaurantes	data:image/png;base64,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
2	Clothes	https://www.creativefabrica.com/wp-content/uploads/2018/11/Clothes-icon-by-rudezstudio-4-580x386.jpg
3	Shopping	https://cdn0.iconfinder.com/data/icons/business-finance-213/64/cart-stroller-pushcart-buy-512.png
4	Credits and loans	https://static.vecteezy.com/system/resources/thumbnails/000/287/135/small/1__284_29.jpg\n
5	Gifts	https://cdn1.vectorstock.com/i/1000x1000/97/35/gift-icon-vector-21679735.jpg
6	Services	https://icons-for-free.com/iconfiles/png/512/services-131964784993674558.png
7	Entertainment	http://simpleicon.com/wp-content/uploads/movie-3.png
\.


--
-- TOC entry 2878 (class 0 OID 16578)
-- Dependencies: 206
-- Data for Name: moneda; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moneda (moneda, descripcion, add_fecha) FROM stdin;
1	GTQ	2021-10-11
2	USD	2021-10-11
\.


--
-- TOC entry 2874 (class 0 OID 16553)
-- Dependencies: 202
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (usuario, correo, add_fecha) FROM stdin;
olme59	00097017@uca.edu.sv	2021-10-10
\.


--
-- TOC entry 2892 (class 0 OID 0)
-- Dependencies: 207
-- Name: cuenta_cuenta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuenta_cuenta_seq', 7, true);


--
-- TOC entry 2893 (class 0 OID 0)
-- Dependencies: 203
-- Name: cuenta_tipo_cuenta_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuenta_tipo_cuenta_tipo_seq', 6, true);


--
-- TOC entry 2894 (class 0 OID 0)
-- Dependencies: 211
-- Name: expense_expense_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expense_expense_seq', 5, true);


--
-- TOC entry 2895 (class 0 OID 0)
-- Dependencies: 205
-- Name: moneda_moneda_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moneda_moneda_seq', 2, true);


--
-- TOC entry 2738 (class 2606 OID 16601)
-- Name: cuenta cuenta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta
    ADD CONSTRAINT cuenta_pkey PRIMARY KEY (cuenta);


--
-- TOC entry 2730 (class 2606 OID 16575)
-- Name: cuenta_tipo cuenta_tipo_descripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta_tipo
    ADD CONSTRAINT cuenta_tipo_descripcion_key UNIQUE (descripcion);


--
-- TOC entry 2732 (class 2606 OID 16573)
-- Name: cuenta_tipo cuenta_tipo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta_tipo
    ADD CONSTRAINT cuenta_tipo_pkey PRIMARY KEY (cuenta_tipo);


--
-- TOC entry 2740 (class 2606 OID 16625)
-- Name: expense_categoria expense_categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expense_categoria
    ADD CONSTRAINT expense_categoria_pkey PRIMARY KEY (expense_categoria);


--
-- TOC entry 2742 (class 2606 OID 16633)
-- Name: expense expense_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expense
    ADD CONSTRAINT expense_pkey PRIMARY KEY (expense);


--
-- TOC entry 2734 (class 2606 OID 16589)
-- Name: moneda moneda_descripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moneda
    ADD CONSTRAINT moneda_descripcion_key UNIQUE (descripcion);


--
-- TOC entry 2736 (class 2606 OID 16587)
-- Name: moneda moneda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moneda
    ADD CONSTRAINT moneda_pkey PRIMARY KEY (moneda);


--
-- TOC entry 2728 (class 2606 OID 16561)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usuario);


--
-- TOC entry 2743 (class 2606 OID 16602)
-- Name: cuenta cuenta_cuenta_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta
    ADD CONSTRAINT cuenta_cuenta_tipo_fkey FOREIGN KEY (cuenta_tipo) REFERENCES public.cuenta_tipo(cuenta_tipo);


--
-- TOC entry 2744 (class 2606 OID 16607)
-- Name: cuenta cuenta_moneda_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta
    ADD CONSTRAINT cuenta_moneda_fkey FOREIGN KEY (moneda) REFERENCES public.moneda(moneda);


--
-- TOC entry 2745 (class 2606 OID 16612)
-- Name: cuenta cuenta_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuenta
    ADD CONSTRAINT cuenta_usuario_fkey FOREIGN KEY (usuario) REFERENCES public.usuario(usuario);


--
-- TOC entry 2747 (class 2606 OID 24619)
-- Name: expense expense_categoria_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expense
    ADD CONSTRAINT expense_categoria_fk FOREIGN KEY (expense_categoria) REFERENCES public.expense_categoria(expense_categoria) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 2746 (class 2606 OID 16634)
-- Name: expense usuario_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expense
    ADD CONSTRAINT usuario_fk FOREIGN KEY (usuario) REFERENCES public.usuario(usuario) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-10-21 13:02:15

--
-- PostgreSQL database dump complete
--

