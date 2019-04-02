import netlify from 'netlify-auth-providers';

export const authWithGitHub = () =>
  new Promise((resolve, reject) => {
    new netlify({
      site_id: '9cfe796f-311c-4ba9-9523-38a1ca7673c7',
    }).authenticate(
      { provider: 'github', scope: 'public_repo,read:org,read:user' },
      (err, data) => (err ? reject(err) : resolve(data)),
    )
  });


