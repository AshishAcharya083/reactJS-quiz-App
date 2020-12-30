const array = [
    {
      "id": 234,
      "question": "Can you insert multiple rows with only one INSERT query?",
      "description": null,
      "answers": {
        "answer_a": "True",
        "answer_b": "False",
        "answer_c": "It's possible but only with newer MySQL versions",
        "answer_d": "Yes but these inserts cause data corruption",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "MySQL"
        }
      ],
      "category": "SQL",
      "difficulty": "Medium"
    },
    {
      "id": 722,
      "question": "Which command will you use to display the first user?",
      "description": null,
      "answers": {
        "answer_a": "kubectl config view -o jsonpath='{.usersname[]}'",
        "answer_b": "kubectl config view -o jsonpath='{.users[].name}'",
        "answer_c": "kubectl config view user 1",
        "answer_d": "kubectl config view -o jsonpath='{.users[*].name}'",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "Kubernetes"
        }
      ],
      "category": "Linux",
      "difficulty": "Medium"
    },
    {
      "id": 944,
      "question": "Which of the following is true for Kubernetes volumes?",
      "description": null,
      "answers": {
        "answer_a": "In Kubernetes, a volume can be thought of as a directory which is accessible to the containers in a pod.",
        "answer_b": "In Kubernetes, a volume can be thought of as a storage for the master nodes.",
        "answer_c": null,
        "answer_d": null,
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": null,
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "Kubernetes"
        }
      ],
      "category": "Docker",
      "difficulty": "Medium"
    },
    {
      "id": 450,
      "question": "Gif and Jpg are the two main types of what ?",
      "description": null,
      "answers": {
        "answer_a": "Videos",
        "answer_b": "Animated Effects",
        "answer_c": "Images",
        "answer_d": "None Of The Above",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "HTML"
        }
      ],
      "category": "Code",
      "difficulty": "Medium"
    },
    {
      "id": 1002,
      "question": "To do any administrative task, an administrator connects to ____________.",
      "description": null,
      "answers": {
        "answer_a": "Kube Proxy",
        "answer_b": "The Kubernetes API Server",
        "answer_c": "etcd",
        "answer_d": "None of the mentioned",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": null,
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "Kubernetes"
        }
      ],
      "category": "DevOps",
      "difficulty": "Easy"
    },
    {
      "id": 711,
      "question": "Are arrays supported in shell scripts?",
      "description": null,
      "answers": {
        "answer_a": "True",
        "answer_b": "False",
        "answer_c": "Yes but only under certain conditions",
        "answer_d": null,
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": null,
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "BASH"
        },
        {
          "name": "Linux"
        }
      ],
      "category": "Linux",
      "difficulty": "Easy"
    },
    {
      "id": 103,
      "question": "Can I generate DLL files from PHP scripts like i can in Perl ?",
      "description": null,
      "answers": {
        "answer_a": "False",
        "answer_b": "True",
        "answer_c": null,
        "answer_d": null,
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "PHP"
        }
      ],
      "category": "",
      "difficulty": "Medium"
    },
    {
      "id": 1030,
      "question": "How to list all nodes in your Docker swarm?",
      "description": null,
      "answers": {
        "answer_a": "docker node get",
        "answer_b": "docker node print",
        "answer_c": "docker node get-all",
        "answer_d": "docker node ls",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "true",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "Docker"
        }
      ],
      "category": "Docker",
      "difficulty": "Medium"
    },
    {
      "id": 651,
      "question": "What is the option to create hard link for a directory?",
      "description": null,
      "answers": {
        "answer_a": "-s",
        "answer_b": "-l",
        "answer_c": "-f",
        "answer_d": "None of the above",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "true",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": "answer_a",
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "BASH"
        }
      ],
      "category": "Linux",
      "difficulty": "Medium"
    },
    {
      "id": 695,
      "question": "Which command can be used to change file access permission bits?",
      "description": null,
      "answers": {
        "answer_a": "chmod",
        "answer_b": "chown",
        "answer_c": "umask",
        "answer_d": "chperm",
        "answer_e": null,
        "answer_f": null
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
      },
      "correct_answer": null,
      "explanation": null,
      "tip": null,
      "tags": [
        {
          "name": "BASH"
        },
        {
          "name": "Linux"
        }
      ],
      "category": "Linux",
      "difficulty": "Easy"
    }
  ]

  export default array;