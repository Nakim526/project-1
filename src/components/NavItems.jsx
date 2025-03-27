import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";
import * as VscIcons from "react-icons/vsc";

export const NavItems= [
  {
    title: "Beranda",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Program",
    path: "/program",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Sekolah Angkasa",
    path: "/sekolah",
    icon: <FaIcons.FaSchool />,
    childrens: [
      {
        title: "Fakultas Kesehatan",
        path: "/sekolah/fk",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Fakultas Filsafat dan Pendidikan",
        path: "/sekolah/ffp",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Fakultas Sastra dan Seni",
        path: "/sekolah/fss",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Fakultas Ilmu Sosial dan Ekonomi Politik",
        path: "/sekolah/fisep",
        icon: <VscIcons.VscOrganization />,
      },
    ],
  },
  {
    title: "Klinik Angkasa",
    path: "/klinik",
    icon: <FaIcons.FaSchool />,
    childrens: [
      {
        title: "Pemeriksaan Kesehatan Gratis",
        path: "/klinik/pkg",
        icon: <VscIcons.VscOrganization />,
      },
    ],
  },
  {
    title: "Unit Usaha",
    path: "/unit",
    icon: <PiIcons.PiTreeStructure />,
    childrens: [
      {
        title: "M.angkasa.ra",
        path: "/unit/kedai",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Taman Kehidu.fun",
        path: "/unit/taman",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Come.read",
        path: "/unit/read",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Saujana.craft",
        path: "/unit/kreatif",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Konfes.sky",
        path: "/unit/sablon",
        icon: <VscIcons.VscOrganization />,
      },
      {
        title: "Clothe",
        path: "/unit/pakaian",
        icon: <VscIcons.VscOrganization />,
      },
    ],
  },
  {
    title: "Arsip",
    path: "/arsip",
    icon: <GiIcons.GiOrganigram />,
  },
  {
    title: "Tentang",
    path: "/tentang",
    icon: <GiIcons.GiOrganigram />,
  },
];
