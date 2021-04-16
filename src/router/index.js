import Vue from "vue";
import Router from "vue-router";
import HomePage from "../home/HomePage";
import RobotBuilder from "../build/RobotBuilder";
import PartInfo from "../parts/PartInfo";
import BrowseParts from "../parts/BrowseParts";
import RobotHeads from "../parts/RobotHeads";
import RobotArms from "../parts/RobotArms";
import RobotBases from "../parts/RobotBases";
import RobotTorsos from "../parts/RobotTorsos";
import SidebarStandard from "../sidebars/SidebarStandard";
import SidebarBuild from "../sidebars/SidebarBuild";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: HomePage,
        sidebar: SidebarStandard
      }
    },
    {
      path: "/build",
      name: "RobotBuilder",
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild
      }
    },

    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        {
          name: "BrowseHeads",
          path: "heads",
          component: RobotHeads
        },
        {
          name: "BrowseArms",
          path: "arms",
          component: RobotArms
        },
        {
          name: "BrowseBases",
          path: "bases",
          component: RobotBases
        },
        {
          name: "BrowseTorsos",
          path: "torsos",
          component: RobotTorsos
        }
      ]
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true
    }
  ]
});
