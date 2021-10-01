// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6nanprdlns1hpokb7r201s4ct",     // CognitoClientID
  "api_base_url": "https://e1e1wzvbr9.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-todo.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1zzzutz32wo4e.amplifyapp.com"                                      // AmplifyURL
};

export default config;
