import React, { useState } from 'react'
import "./experiences.scss"
import Card from "../card/Card"
export default function Experiences() {
    const exp = [
        {
            id: 1,
            title: "DEVELOPPEUR WEB/MOBILE",
            company: "OPIA Solutions",
            periode: {
                from: new Date(2021, 2, 1),
                to: new Date(2021, 4, 1)
            },
            projects: [
                {
                    title: "Application Mobile d'expertise automobile",
                    technologies: [
                        "Java ANDROID",
                        "API PHP MySQL"
                    ],
                    assets: [
                        {
                            url: "/assets/android.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/java.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/php-mysql.png",
                            size: {
                                width: 150, height: 150
                            }
                        }
                    ],
                },
                {
                    title: "Application Mobile d'expertise automobile",
                    technologies: [
                        "React Native",
                        "API PHP MySQL"
                    ],
                    assets: [
                        {
                            url: "/assets/react-native.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/java.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/php-mysql.png",
                            size: {
                                width: 150, height: 150
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "DEVELOPPEUR WEB/MOBILE",
            company: "CDMA Solutions",
            periode: {
                from: new Date(2019, 9, 1),
                to: new Date(2020, 3, 1)
            },
            projects: [
                {
                    title: "Application WEB d'expertise automobile",
                    technologies: [
                        "LARAVEL PHP",
                        "VUE Js",
                        "MySQL"
                    ],
                    assets: [
                        {
                            url: "/assets/laravel-vuejs.png",
                            size: {
                                width: 250, height: 150
                            }
                        },
                        {
                            url: "/assets/php-mysql.png",
                            size: {
                                width: 250, height: 150
                            }
                        }
                    ]
                },
                {
                    title: "Application Mobile d'expertise automobile",
                    technologies: [
                        "Java ANDROID",
                        "API PHP MySQL "
                    ],
                    assets: [
                        {
                            url: "/assets/android.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/java.png",
                            size: {
                                width: 150, height: 150
                            }
                        },
                        {
                            url: "/assets/php-mysql.png",
                            size: {
                                width: 150, height: 150
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "DEVELOPPEUR WEB",
            company: "ISGI Casa",
            periode: {
                from: new Date(2020, 5, 1),
                to: new Date(2020, 6, 1)
            },
            projects: [
                {
                    title: "Application WEB de gestion des inscriptions et rendez vous",
                    technologies: [
                        "LARAVEL PHP",
                        "VUE Js",
                        "MySQL"
                    ]
                    ,
                    assets: [
                        {
                            url: "/assets/laravel-vuejs.png",
                            size: {
                                width: 250, height: 150
                            }
                        },
                        {
                            url: "/assets/php-mysql.png",
                            size: {
                                width: 250, height: 150
                            }
                        }

                    ]
                },

            ]
        }
    ];
    const [index, setIndex] = useState(0);

    return (
        <div className="experiences" id="Experiences">
            <h1>Experiences</h1>
            <ul>
                {
                    exp.map((e, i) => <li onClick={() => setIndex(i)} className={e.id - 1 === index && 'active'}>{e.company}</li>)
                }

            </ul>
            <div className="container">
                {
                    exp[index].projects.map((p, j) => (<Card content={p} key={j} />))
                }


            </div>
        </div>
    )
}
