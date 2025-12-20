import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 48,
    height: 48,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                }}
            >
                MJ
            </div>
        ),
        {
            ...size,
        }
    )
}
