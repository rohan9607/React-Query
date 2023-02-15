import { useRoutes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroes from "./components/SuperHeroes";
import MainLayout from "./Layouts/MainLayout";
import React from "react";
import RQSuperHereoswithMainCharacter from "./components/RQSuperHereoswithMainCharacter";
import SuperHeroDetails from "./components/SuperHeroDetails";
import ParallelQueries from "./components/ParallelQueries";
import DynamicPArallelQueries from "./components/DynamicPArallelQueries";
import DependantQueries from "./components/DependantQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";
import SaveRQHero from "./components/SaveRQHero";
const Router  = () => {
    return useRoutes([
        {
            path : "/",
            element : <MainLayout/>,
            children: [
                {
                    path : "/",
                    element : <HomePage/>
                },
                {
                    path : "super-heroes",
                    element : <SuperHeroes/>
                },
                {
                    path : "rq-super-heroes",
                    element: <RQSuperHeroes/>
                },
                {
                    path : "rq-heros-with-main",
                    element : <RQSuperHereoswithMainCharacter/>
                },
                {
                    path : "superHero/:id",
                    element : <SuperHeroDetails/>
                },
                {
                    path : "rq-parallel",
                    element : <ParallelQueries/>
                },
                {
                    path : "rq-parallel-dynamic",
                    element : <DynamicPArallelQueries/>
                },
                {
                    path : "rq-depenedant-qr",
                    element : <DependantQueries/>
                },
                {
                    path : "rq-paginated-qr",
                    element : <PaginatedQueries/>
                }
                ,
                {
                    path : "rq-infinite-qr",
                    element : <InfiniteQueries/>
                },
                {
                    path : "rq-save-hero",
                    element : <SaveRQHero/>
                }
            ]
        }
    ])
}

export default Router;