const ProjectsData = [
  {
    id: 5,
    image: process.env.PUBLIC_URL + "/images/lostnfound.jpg",
    title: "Lost & Found Web App",
    url: "",
    description: "A platform where people can report lost items and notify others if any of them are found.",
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + "/images/WACC.jpeg",
    title: "WACC Compiler",
    url: "",
    description: "Built a lexer, a parser and a semantic analyser for WACC programs and built a code generator for the ARM11 architecture",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/images/pintos.jpg",
    title: "Pintos Operating System",
    url: "",
    description: "A simple operating system framework for the 80x86 architecture. Strengthened supports in kernel threads, running user programs and file system and implemented the use of virtual memory",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/images/logic.jpeg",
    title: "Propositional Logic Evaluator",
    url: "",
    description:
      "A logic compiler built using a parse tree that takes logic equations and assignments as input, and returns an assembly file..",
  },
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/images/GOL.png",
    title: "Conway's Game of Life",
    description: "Simulates cell interactions in ‘Conway's Game of Life’ on a 2-dimensional grid of squared cells",
  },
];

export default ProjectsData;
