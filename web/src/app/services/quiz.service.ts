import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor() { }

  returnJsData() { return {
    "id": 1,
    "name": "JavaScript Quiz",
    "description": "JavaScript Quiz (Basic Multiple Choice Questions for JavaScript Developers)",
    "questions": [
        {
            "id": 1010,
            "name": "Which HTML tag do we use to put the JavaScript?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "<javascript>",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "<script>",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "<js>",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "None of the above",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1011,
            "name": "Which built-in method calls a function for each element in the array?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "while()",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "loop",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "forEach",
                    "isAnswer": true
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "takeUntil",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1012,
            "name": "What is the difference between let and var?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "let has local scope",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Both are same",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "var is new data type",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "let consumes more cpu and ram",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1013,
            "name": "What is TypeScript?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "A Language based on Javascript",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "script that runs on browser",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "A DataType Collection of Javascript",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "None of the above",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1014,
            "name": "Which of the following is right syntex for arrow function?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "a -> { return b; }",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "x <= x + y;",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "x <- x + 5;",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "x => x + 5;",
                    "isAnswer": true
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1015,
            "name": "Which new ES6 syntax helps with formatting output text - mixing variables with string literals, for example.",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Generator Functions",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Arrow Functions",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "Template Strings",
                    "isAnswer": true
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Set Data Structure",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1016,
            "name": "Which ES6 feature helps in merging of a number of changed properties into an existing object?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Class syntex",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "Object.assign()",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "map data structure",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Array.includes(obj);",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1017,
            "name": "What is the difference between == and === ?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "=== throws syntex error",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "== checks values only, === checks types as well",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "=== is reference type check only",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Both are same",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1018,
            "name": "Which of the following is NOT the method of an Array?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": ".map()",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": ".includes()",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": ".subscribe()",
                    "isAnswer": true
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": ".flatMap()",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1019,
            "name": "What will be the output of the following code: ['a', 'b', 'c'].fill(7, 1, 2);?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "['a', 7, 'c']",
                    "isAnswer": true
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "['a', 7, 7, 'b', 'c']",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "['a', 'b', 'c']",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "['7', 7, 'c']",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        }
    ]
  }
    
}

returnAspData() {return { 
  "id": 1,
  "name": "Asp.Net Quiz",
  "description": "Asp.Net Quiz (contains webform, mvc, web API, etc.)",
  "questions": [
      {
          "id": 1010,
          "name": "ASP.NET webform separates the HTML output from program logic using a feature named as",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Exception",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Code-behind",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Code-front",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1011,
          "name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Theme",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Code-front",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Cross Page Posting",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1012,
          "name": "What class does the ASP.NET Web Form class inherit from by default?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "System.Web.UI.Page",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "System.Web.UI.Form",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "System.Web.GUI.Page",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "System.Web.Form",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1013,
          "name": "What does MVC stand for?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Model View Controller",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Maximum Virtual Control",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Microsoft Visual Core",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1014,
          "name": "Which of the following does NOT require type casting?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Session",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "TempData",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "ViewData",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "ViewBag",
                  "isAnswer": true
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1015,
          "name": "Which is the correct order of Page life-cycle in asp.net webform?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Init, PreRender, Load",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Load, PreRender, Init",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Init, Load, PreRender",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1016,
          "name": "Which of these data source controls do not implement caching?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "ObjectDataSource",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "LinqDataSource",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "SqlDataSource",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "XmlDataSource",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1017,
          "name": "Which tag asp:Label control by default renders to?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "div",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "span",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "body",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "label",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1018,
          "name": "Which method do you use to explicitly kill a user's session?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Session.Terminate()",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Session.TimeOut()",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Session.Abondon()",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Session.Kill()",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1019,
          "name": "Which of the following object is ideal for keeping data alive for a single request?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "HttpContext",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Session",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Cookies",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "SqlServer",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      }
  ]
}}

returnCSHarpData () {return {
  "id": 2,
  "name": "C# and .Net Framework",
  "description": "C# and .Net Quiz (contains C#, .Net Framework, Linq, etc.)",
  "config": {
      "shuffleQuestions": true,
      "showPager": false,
      "allowBack": true,
      "autoMove": true
  },
  "questions": [
      {
          "id": 1010,
          "name": "Which of the following assemblies can be stored in Global Assembly Cache?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Private Assemblies",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Friend Assemblies",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Public Assemblies",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Shared Assemblies",
                  "isAnswer": true
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1011,
          "name": "Which of the following .NET components can be used to remove unused references from the managed heap?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Language Infrastructure",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "CLR",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Garbage Collector",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Class Loader",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "CTS",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1012,
          "name": "Which of the following utilities can be used to compile managed assemblies into processor-specific native code?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "gacutil",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "ngen",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "dumpbin",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "ildasm",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1013,
          "name": "Which of the following is NOT an Arithmetic operator in C#.NET?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "** (Double Star)",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "+ (Plus)",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "/ (Divide)",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "% (Modulo)",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1014,
          "name": "Which of the following statements is correct about an interface used in C#.NET?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "If a class implements an interface partially, then it should be an abstract class.",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "A class cannot implement an interface partially.",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "An interface can contain static methods.",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "An interface can contain static data.",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1015,
          "name": "What does the term <strong>immutable</strong> means in term of string objects?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "We can modify characters included in the string",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "We cannot modify characters contained in the string",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "We cannot perform various operation of comparison, inserting, appending etc",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1016,
          "name": "Which of the following is NOT a .NET Exception class?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Exception",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "StackMemoryException",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "DivideByZeroException",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "InvalidOperationException",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1017,
          "name": "In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Compiler",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "CLR",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Linker",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Operating system",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1018,
          "name": "Which of the following statements are correct about delegates?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Delegates cannot be used to call a static method of a class.",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Delegates cannot be used to call procedures that receive variable number of arguments.",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "If signatures of two methods are same they can be called through the same delegate object.",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1019,
          "name": "Which of the following does NOT represent Integer?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Char",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Byte",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Short",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Long",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      }
  ]
}}
returnDesignData() {return {
  "id": 3,
  "name": "Design Patterns",
  "description": "Design Patterns Quiz including solid principles.",
  "questions": [
      {
          "id": 1010,
          "name": "In SOLID principle, O stands for:",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Objects and Variables",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Open-Closed Principle",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Object Oriented Programming",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "OutOfMemory Exception",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1011,
          "name": "Which pattern defines an interface for creating an object, but let the subclasses decide which class to instantiate. It let the instantiation differ to subclasses.",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Factory Method",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Abstract Factory",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Builder",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Prototype",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1012,
          "name": "Which pattern attach the additional responsibilities to an object dynamically.It provides a flexible alternative to subclassing for extending functionality.",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Chain of responsibility",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Adapter",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Decorator",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Composite",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1013,
          "name": "Singleton pattern is a (according to Gang of Four):",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Creational Pattern",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Behavioural Pattern",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Structural Pattern",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1014,
          "name": "MVC, MVP and MVVP are related to which layer of software architecture?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Data Access Layer",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Business/Service Layer",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Third Party Library",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "User Interface",
                  "isAnswer": true
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1015,
          "name": "Which pattern defines a family of algorithms, encapsulate each one, and make them interchangeable. It lets the algorithm vary independently from clients that use it?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Template method",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Decorator",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Strategy",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Visitor",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1016,
          "name": "Which pattern define one to many dependency between objects so that when one object change state, all its dependent are notified and updated automatically?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Chain of responsibility",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Observer Pattern",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Event Notification",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Deligate Pattern",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1017,
          "name": "Which pattern ensures a class has only one instance, and provide a global access point to it?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Single Class Factory",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Singleton",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Proxy",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Flyweight",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1018,
          "name": "Which pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Iterator",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Visitor",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Composite",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Command",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1019,
          "name": "In SOLID principles 'S' stands for:",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Single Responsibility",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Session",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Strength",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "SqlServer",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      }
  ]
}} 

  get(url: string) {

    let returnVal;
    switch (url) {
      case 'data/javascript.json':
        returnVal=this.returnJsData();
        break;
      case 'data/aspnet.json':
        returnVal=this.returnAspData();
          break;
      case 'data/csharp.json':
        returnVal=this.returnCSHarpData();
            break;
      case 'data/designPatterns.json':
          returnVal=this.returnDesignData();
          break;
      default:
        returnVal=this.returnJsData();
        break;
    }
    return returnVal;
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
  

}
