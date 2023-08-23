/** @type {import('next').NextConfig} */


const nextConfig = {

    //  distDir: 'build',  //specify a name to use for a custom build directory

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [{
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                },
                ]
            }
        ]
    },
    
}

module.exports = nextConfig
